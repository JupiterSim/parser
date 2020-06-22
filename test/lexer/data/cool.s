#################################################################
#                      ___ ___   ___  _                         #
#                     / __/ _ \ / _ \| |                        #
#                    | (_| (_) | (_) | |__                      #
#                     \___\___/ \___/|____|                     #
#                          Runtime                              #
#                                                               #
#                          V1.0.1                               #
#                       RISC-V Version                          #
#                      Jupiter Simulator                        #
#################################################################


.data


# Default COOL runtime messages

_abort_msg:     .asciiz "Abort called from class "
_colon_msg:     .asciiz ":"
_dispatch_msg:  .asciiz ": Dispatch to void.\n"
_cabort_msg:    .asciiz "No match in case statement for Class "
_cabort_msg2:   .asciiz "Match on void in case statement.\n"
_nl:            .asciiz "\n"
_term_msg:      .asciiz "COOL program successfully executed"
_sabort_msg1:   .asciiz "Index to substr is negative\n"
_sabort_msg2:   .asciiz "Index to substr is too big\n"
_sabort_msg3:   .asciiz "Length to substr too long\n"
_sabort_msg4:   .asciiz "Length to substr is negative\n"
_sabort_msg:    .asciiz "Execution aborted.\n"
_objcopy_msg:   .asciiz "Object.copy: Invalid object size.\n"
_divzero_msg:   .asciiz "Exception: division by 0...\n"

# Messages for the NoGC garabge collector

_NoGC_COLLECT:   .asciiz "Increasing heap...\n"
_NoGC_abort_msg: .asciiz "\n[panic] Heap overflow!!!\n"

.align 2

# Global functions

.globl __start
.globl equality_test
.globl _dispatch_abort
.globl _case_abort2
.globl _case_abort
.globl _div_by_zero
.globl Object.copy
.globl Object.abort
.globl Object.type_name
.globl IO.out_string
.globl IO.out_int
.globl IO.in_int
.globl IO.in_string
.globl String.length
.globl String.concat
.globl String.substr

.text

#################################################################
#  COOL Entry Point                                             #
#                                                               #
#  Standard startup code.                                       #
#  Invoke the routine main with no arguments.                   #
#################################################################
__start:
  jal _NoGC_Init       # sets gp and s7 (limit)
  la a0, Main_protObj  # create the Main object
  jal Object.copy      # Call copy
  addi sp, sp, -4
  sw a0, 4(sp)         # save the Main object on the stack
  mv s0, a0            # set s0 to point to self
  jal Main_init        # initialize the Main object
  jal Main.main        # Invoke main method
  addi sp, sp, 4       # restore the stack
  la a1, _term_msg     # show terminal message
  li a0, 4
  ecall
  li a0, 10
  ecall                # ecall 10 (exit)


#################################################################
#  Equality Test                                                #
#                                                               #
#  Polymorphic equality testing function:                       #
#  Two objects are equal if they are                            #
#  - identical (pointer equality, inlined in code)              #
#  - have same tag and are of type BOOL,STRING,INT and contain  #
#    the same data                                              #
#                                                               #
#  The tags for Int,Bool,String are found in the global         #
#  locations_int_tag, _bool_tag, _string_tag, which are         #
#  initialized by the data part of the generated code.          #
#  This remvs a consistency problem between this file and the   #
#  generated code.                                              #
#                                                               #
#  INPUT:                                                       #
#  - The two objects are passed in t1 and t2                    #
#                                                               #
#  OUTPUT:                                                      #
#  - Initial value of a0, if the objects are equal              #
#    Initial value of a1, otherwise                             #
#                                                               #
# Does not return!                                              #
#################################################################
equality_test:
  # ops in t1 t2
  # true in A0, false in A1
  # assume t1, t2 are not equal
  beq t1, zero, _eq_false # t2 can't also be void
  beq t2, zero, _eq_false # t1 can't also be void
  lw a6, 0(t1)            # get tags
  lw a7, 0(t2)
  bne a7, a6, _eq_false   # compare tags
  lw a2, _int_tag         # load int tag
  beq a7, a2, _eq_int     # Integers
  lw a2, _bool_tag        # load bool tag
  beq a7, a2, _eq_int     # Booleans
  lw a2, _string_tag      # load string tag
  bne a7, a2, _eq_false   # Not a primitive type
_eq_str:                  # handle strings
  lw a6, 12(t1)           # get string size objs
  lw a7, 12(t2)
  lw a6, 12(a6)           # get string sizes
  lw a7, 12(a7)
  bne a7, a6, _eq_false
  beqz a7, _eq_true       # 0 length strings are equal
  addi t1, t1, 16         # Point to start of string
  addi t2, t2, 16
  mv t0, a6               # Keep string length as counter
_eq_l1:
  lbu a6, 0(t1)           # get char
  addi t1, t1, 1
  lbu a7, 0(t2)
  addi t2, t2, 1
  bne a7, a6, _eq_false
  addi t0, t0, -1         # Decrement counter
  bnez t0, _eq_l1
  j _eq_true              # end of strings
_eq_int:                  # handles booleans and ints
  lw a6, 12(t1)           # load values
  lw a7, 12(t2)
  bne a7, a6, _eq_false
_eq_true:
  jr ra                   # return true
_eq_false:
  mv a0, a1               # mv false into accumulator
  jr ra


#################################################################
#  Dispatch Abort                                               #
#                                                               #
#  Prints error message and exits.                              #
#  Called on dispatch to void.                                  #
#                                                               #
#  INPUT:                                                       #
#  - line number in t1                                          #
#  - filename in a0                                             #
#                                                               #
#  OUTPUT:                                                      #
#  - None                                                       #
#                                                               #
# Does not return!                                              #
#################################################################
_dispatch_abort:
  sw t1, 0(sp)          # save line number
  addi sp, sp, -4
  addi a1, a0, 16       # adjust to beginning of string
  li a0, 4
  ecall                 # print file name
  la a1, _colon_msg
  li a0, 4
  ecall                 # print ":"
  lw a1, 4(sp)
  li a0, 1
  ecall                 # print line number
  li a0, 4
  la a1, _dispatch_msg
  ecall                 # print dispatch-to-void message
  li a0, 10
  ecall                 # exit


#################################################################
#  Case Abort 2                                                 #
#                                                               #
#  Prints error message and exits.                              #
#  Called on case on void.                                      #
#                                                               #
#  INPUT:                                                       #
#  - line number in t1                                          #
#  - filename in a0                                             #
#                                                               #
#  OUTPUT:                                                      #
#  - None                                                       #
#                                                               #
# Does not return!                                              #
#################################################################
_case_abort2:
  sw t1, 0(sp)         # save line number
  addi sp, sp -4
  addi a1, a0, 16      # adjust to beginning of string
  li a0, 4
  ecall                # print file name
  la a1, _colon_msg
  li a0, 4
  ecall                # print ":"
  lw a1, 4(sp)
  li a0, 1
  ecall                # print line number
  li a0, 4
  la a1, _cabort_msg2
  ecall                # print case-on-void message
  li a0, 10
  ecall                # exit


#################################################################
#  Case Abort                                                   #
#                                                               #
#  Is called when a case statement has no match                 #
#                                                               #
#  INPUT:                                                       #
#  - a0 contains the object on which the case was performed     #
#                                                               #
#  OUTPUT:                                                      #
#  - None                                                       #
#                                                               #
# Does not return!                                              #
#################################################################
_case_abort:
  mv s0, a0            # save the expression object
  la a1, _cabort_msg
  li a0, 4
  ecall                # print_str
  la t1, class_nameTab
  lw a6, 0(s0)         # Get object tag
  slli a6, a6, 2       # *4
  add t1, t1, a6
  lw t1, 0(t1)         # Load class name string obj.
  addi a1, t1, 16      # Adjust to beginning of str
  li a0, 4             # print_str
  ecall
  la a1, _nl
  li a0, 4             # print_str
  ecall
  li a0, 10
  ecall                # Exit


#################################################################
#  Div by Zero Exception                                        #
#                                                               #
#  Is called when a division by zero occurs                     #
#                                                               #
#  INPUT:                                                       #
#  - None                                                       #
#                                                               #
#  OUTPUT:                                                      #
#  - None                                                       #
#                                                               #
# Does not return!                                              #
#################################################################
_div_by_zero:
  la a1, _divzero_msg
  li a0, 4
  ecall
  li a0, 10
  ecall     # Exit


#################################################################
#  Object.copy                                                  #
#                                                               #
#  Copies an object and returns a pointer to a new object in    #
#  the heap. Note that to increase performance, the stack frame #
#  is not set up unless it is absolutely needed.  As a result,  #
#  and the frame is setup just before the call to               #
#  "_MemMgr_Alloc" is destroyed just after it. The increase in  #
#  performance occurs becuase the calls to "_MemMgr_Alloc"      #
#  happen very infrequently when the heap needs to be garbage   #
#  collected.                                                   #
#                                                               #
#  INPUT:                                                       #
#  - a0: object to be copied to free space in heap.             #
#                                                               #
#  OUTPUT:                                                      #
#  - a0: points to the newly created copy.                      #
#################################################################
Object.copy:
  addi sp, sp, -8                 # create stack frame
  sw ra, 8(sp)
  sw a0, 4(sp)
  jal _MemMgr_Test                # test GC area
  lw a0, 4(sp)                    # get object size
  lw a0, 4(a0)
  blez a0, _objcopy_error         # check for invalid size
  slli a0, a0, 2                  # convert words to bytes
  addi a0, a0, 4                  # account for eyecatcher
  jal _MemMgr_Alloc               # allocate storage
  addi a1, a0, 4                  # pointer to new object
  lw a0, 4(sp)                    # the self object
  lw ra, 8(sp)                    # restore return address
  addi sp, sp, 8                  # remv frame
  lw t0, 4(a0)                    # get size of object
  slli t0, t0, 2                  # convert words to bytes
  j _objcopy_allocated            # get on with the copy

# A faster version of Object.copy, for internal use (does not call
# _MemMgr_Test, and if possible not _MemMgr_Alloc)
_quick_copy:
  lw t0, 4(a0)                     # get size of object to copy
  blez t0, _objcopy_error          # check for invalid size
  slli t0, t0, 2                   # convert words to bytes
  addi t1, t0, 4                   # account for eyecatcher
  add gp, gp, t1                   # allocate memory
  sub a1, gp, t0                   # pointer to new object
  blt gp, s11, _objcopy_allocated  # check allocation
_objcopy_allocate:
  li t6, 4
  sub gp, a1, t6                   # restore the original gp
  addi sp, sp, -8                  # frame size
  sw ra, 8(sp)                     # save return address
  sw a0, 4(sp)                     # save self
  mv a0, t1                        # put bytes to allocate in a0
  jal _MemMgr_Alloc                # allocate storage
  addi a1, a0, 4                   # pointer to new object
  lw a0, 4(sp)                     # the self object
  lw ra, 8(sp)                     # restore return address
  addi sp, sp, 8                   # remv frame
  lw t0, 4(a0)                     # get size of object
  slli t0, t0, 2                   # convert words to bytes
_objcopy_allocated:
  addi t1, x0, -1
  sw t1, -4(a1)                    # store eyecatcher
  add t0, t0, a0                   # find limit of copy
  mv t1, a1                        # save source
_objcopy_loop:
  lw a6, 0(a0)                     # copy word
  sw a6, 0(t1)
  addi a0, a0, 4                   # update source
  addi t1, t1, 4                   # update destination
  bne a0, t0, _objcopy_loop        # loop
_objcopy_end:
  mv a0, a1                        # put new object in a0
  jr ra                            # return
_objcopy_error:
  la a1 _objcopy_msg               # show error message
  li a0 4
  ecall
  li a0 10                         # exit
  ecall


#################################################################
#  Object.type_name                                             #
#                                                               #
#  The abort method for the object class (usually inherited by  #
#  all other classes)                                           #
#                                                               #
#  INPUT:                                                       #
#  - a0 contains the object on which abort() was dispatched.    #
#                                                               #
#  OUTPUT:                                                      #
#  - None                                                       #
#################################################################
Object.abort:
  mv s0, a0            # save self
  li a0, 4
  la a1, _abort_msg
  ecall                # print_str
  la t1, class_nameTab
  lw a6, 0(s0)         # Get object tag
  slli a6, a6, 2       # *4
  add t1, t1, a6
  lw t1, 0(t1)         # Load class name string obj.
  addi a1, t1, 16      # Adjust to beginning of str
  li a0, 4             # print_str
  ecall
  la a1, _nl
  li a0, 4
  ecall                # print new line
  li a0, 10
  ecall                # Exit


#################################################################
#  Object.type_name                                             #
#                                                               #
#  Gets a reference to class name string object                 #
#                                                               #
#  INPUT:                                                       #
#  - a0 object who's class name is desired                      #
#                                                               #
#  OUTPUT:                                                      #
#  - a0 reference to class name string object                   #
#################################################################
Object.type_name:
  la t1, class_nameTab
  lw a6, 0(a0)         # Get object tag
  slli a6, a6, 2       # *4
  add t1, t1, a6       # index table
  lw a0, 0(t1)         # Load class name string obj.
  jr ra


#################################################################
#  IO.out_string                                                #
#                                                               #
#  Prints out the contents of a string object argument          #
#  which is on top of the stack.                                #
#                                                               #
#  INPUT:                                                       #
#  - a0: string object to print (a0 is preserved)               #
#                                                               #
#  OUTPUT:                                                      #
#  - none                                                       #
#################################################################
IO.out_string:
  addi sp, sp, -4
  sw a0, 4(sp)    # save self
  lw a0, 8(sp)    # get arg
  addi a1, a0, 16 # Adjust to beginning of str
  li a0, 4        # print_str
  ecall
  lw a0, 4(sp)    # return self
  addi sp, sp, 8  # pop argument
  jr ra


#################################################################
#  IO.out_int                                                   #
#                                                               #
#  Prints out the contents of an integer object on top of the   #
#  stack.                                                       #
#                                                               #
#  INPUT:                                                       #
#  - a0: int object to print (a0 is preserved)                  #
#                                                               #
#  OUTPUT:                                                      #
#  - none                                                       #
#################################################################
IO.out_int:
  addi sp, sp, -4
  sw a0, 4(sp)    # save self
  lw a0, 8(sp)    # get arg
  lw a1, 12(a0)   # Fetch int
  li a0, 1        # print_int
  ecall
  lw a0, 4(sp)    # return self
  addi sp, sp, 8  # pop argument
  jr ra


#################################################################
#  IO.in_int                                                    #
#                                                               #
#  Returns an integer object read from the terminal in a0       #
#                                                               #
#  INPUT:                                                       #
#  - None                                                       #
#                                                               #
#  OUTPUT:                                                      #
#  - a0 the read int object                                     #
#################################################################
IO.in_int:
  addi sp, sp, -4
  sw ra, 4(sp)       # save return address
  la a0, Int_protObj
  jal _quick_copy    # Call copy
  jal Int_init
  addi sp, sp, -4
  sw a0, 4(sp)       # save new object
  li a0, 5           # read int
  ecall
  mv a6, a0
  lw a0, 4(sp)
  addi sp, sp, 4
  sw a6, 12(a0)      # store int read into obj
  lw ra, 4(sp)
  addi sp, sp, 4
  jr ra


#################################################################
#  IO.in_string                                                 #
#                                                               #
#  Returns a string object read from the terminal, removing the #
#  '\n'.                                                        #
#                                                               #
#  INPUT:                                                       #
#  - None                                                       #
#                                                               #
#  OUTPUT:                                                      #
#  - a0 the read string object                                  #
#################################################################
IO.in_string:
  addi sp, sp, -8
  sw ra, 8(sp)             # save return address
  sw x0, 4(sp)             # init GC area
  jal _MemMgr_Test         # test GC area
  la a0, Int_protObj       # Int object for string size
  jal _quick_copy
  jal Int_init
  sw a0, 4(sp)             # save it
  li a0, 16                # size of string obj. header
  addi a0, a0, 1026        # max size of string data
  jal _MemMgr_QAlloc       # make sure enough room
  la a0, String_protObj    # make string object
  jal _quick_copy
  jal String_init
  lw t0, 4(sp)             # get size object
  sw t0, 12(a0)            # store size object in string
  sw a0, 4(sp)             # save string object
  addi gp, gp, -4          # overwrite last word
_instr_ok:
  li a2, 1026              # largest string to read
  mv a1, gp
  li a0, 8                 # read string
  ecall
  mv t0, gp                # t0 to beginning of string
_instr_find_end:
  lb a6, 0(gp)
  addi gp, gp, 1
  bnez a6, _instr_find_end # gp points just after the null byte
  lb a6, 0(t0)             # is first byte '\0'?
  bnez a6, _instr_noteof   # we read nothing. Return '\n' (we don't have '\0'!!!)
  addi a6, zero 10         # load '\n' into a6
  sb a6, -1(gp)
  sb zero, 0(gp)           # terminate
  addi gp, gp, 1
  j _instr_nonl
_instr_noteof:
  lb a6, -2(gp)            # Check if there really is a '\n'
  li t6, 10
  bne a6, t6, _instr_nonl  # Write '\0' over '\n'
  sb zero, -2(gp)          # Set end of string where '\n' was
  addi gp gp -1            # adjust for '\n'
_instr_nonl:
  lw a0, 4(sp)             # get pointer to new str obj
  lw t1, 12(a0)            # get pointer to int obj
  sub t0, gp, a0
  li t6, 16
  sub t0, t0, t6           # calc actual str size
  addi t0, t0, -1          # adjust for '\0'
  sw t0, 12(t1)            # store string size in int obj
  addi gp, gp, 3           # was already 1 past '\0'
  li t0, 0xfffffffc
  and gp, gp, t0           # word align gp
  sub t0, gp, a0           # calc length
  srli t0, t0, 2           # divide by 4
  sw t0, 4(a0)             # set size field of obj
  lw ra, 8(sp)             # restore return address
  addi sp, sp, 8
  jr ra                    # return


#################################################################
#  String.length                                                #
#                                                               #
#  Returns Int Obj with string length of self                   #
#                                                               #
#  INPUT:                                                       #
#  - a0 the string object                                       #
#                                                               #
#  OUTPUT:                                                      #
#  - a0 the int object which is the size of the string          #
#################################################################
String.length:
  lw a0, 12(a0)  # fetch attr
  jr ra          # Return


#################################################################
#  String.concat                                                #
#                                                               #
#  Concatenates arg1 onto the end of self and returns a pointer #
#  to the new object.                                           #
#                                                               #
#  INPUT:                                                       #
#  - a0: the first string object (self)                         #
#  - Top of stack: the second string object (arg1)              #
#                                                               #
#  OUTPUT:                                                      #
#  - a0 the new string object                                   #
#################################################################
String.concat:
  addi sp, sp, -16
  sw ra, 16(sp)             # save return address
  sw a0, 12(sp)             # save self arg.
  sw x0, 8(sp)              # init GC area
  sw x0, 4(sp)              # init GC area
  jal _MemMgr_Test          # test GC area
  lw a0, 12(sp)
  lw a0, 12(a0)
  jal _quick_copy           # Call copy
  sw a0, 8(sp)              # save new size object
  lw t1, 20(sp)             # load arg object
  lw t1, 12(t1)             # get size object
  lw t1, 12(t1)             # arg string size
  blez t1, _strcat_argempty # nothing to add
  lw t0, 12(sp)             # load self object
  lw t0, 12(t0)             # get size object
  lw t0, 12(t0)             # self string size
  add t0, t0, t1            # new size
  sw t0, 12(a0)             # store new size
  addi a0, t0, 16           # size to allocate
  addi a0, a0, 4            # include '\0', +3 to align
  li t2, 0xfffffffc
  and a0, a0, t2            # align on word boundary
  addi a0, a0, 1            # make size odd for GC <-|
  sw a0, 4(sp)              # save size in bytes     |
  addi a0, a0, 3            # include eyecatcher(4) -1
  jal _MemMgr_QAlloc        # check memory
  lw a0, 12(sp)             # copy self
  jal _quick_copy           # Call copy
  lw t0, 8(sp)              # get the Int object
  sw t0, 12(a0)             # store it in the str obj.
  sub t1, gp, a0            # bytes allocated by _quick_copy
  lw t0, 4(sp)              # get size in bytes (no eyecatcher)
  li t6, 1
  sub t0, t0, t6            # Remv extra 1 (was for GC)
  sub t1, t0, t1            # more memory needed
  add gp, gp, t1            # allocate rest
  srli t0, t0, 2            # convert to words
  sw t0, 4(a0)              # save new object size
  lw t0, 12(sp)             # get original self object
  lw t0, 12(t0)             # get size object
  lw t0, 12(t0)             # self string size
  addi t1, a0, 16           # points to start of string data
  add t1, t1, t0            # points to end: '\0'
  lw t0, 20(sp)             # load arg object
  addi t2, t0, 16           # points to start of arg data
  lw t0, 12(t0)             # get arg size
  lw t0, 12(t0)
  add t0, t0, t2            # find limit of copy
_strcat_copy:
  lb a6, 0(t2)              # load from source
  sb a6, 0(t1)              # save in destination
  addi t2, t2, 1            # advance each index
  addi t1, t1, 1
  bne t2, t0, _strcat_copy  # check limit
  sb x0, 0(t1)              # add '\0'
  lw ra, 16(sp)             # restore return address
  addi sp, sp, 20           # pop argument
  jr ra                     # return
_strcat_argempty:
  lw a0, 12(sp)             # load original self
  lw ra, 16(sp)             # restore return address
  addi sp, sp, 20           # pop argument
  jr ra                     # return


#################################################################
#  String.substr(i,l)                                           #
#                                                               #
#  Returns the sub string of self from i with length l          #
#  Offset starts at 0.                                          #
#                                                               #
#  INPUT:                                                       #
#  - a0 the string                                              #
#  - length int object on top of stack (-4)                     #
#  - index int object below length on stack (-8)                #
#                                                               #
#  OUTPUT:                                                      #
#  - The substring object in a0                                 #
#################################################################
String.substr:
  addi sp, sp, -12        # frame
  sw ra, 4(sp)            # save return
  sw a0, 12(sp)           # save self
  sw x0, 8(sp)            # init GC area
  jal _MemMgr_Test        # test GC area
  lw a0, 12(sp)
  lw a6, 4(a0)
  la a0, Int_protObj      # ask if enough room to allocate
  lw a0, 4(a0)            # a string object, an int object,
  add a0, a0, a6          # and the string data
  addi a0, a0, 2          # include 2 eyecatchers
  slli a0, a0, 2
  addi a0, a0, 1026
  jal _MemMgr_QAlloc
_ss_ok:
  la a0, Int_protObj
  jal _quick_copy
  jal Int_init
  sw a0, 8(sp)            # save new length obj
  la a0, String_protObj
  jal _quick_copy
  jal String_init         # new obj ptr in a0
  mv a2, a0               # use a2 to make copy
  addi gp, gp -4          # backup alloc ptr
  lw a1, 12(sp)           # load orig
  lw t1, 20(sp)           # index obj
  lw t2, 16(sp)           # length obj
  lw t0, 12(a1)
  lw a7, 12(t1)           # index
  lw a6, 12(t0)           # size of orig
  bltz a7, _ss_abort1     # index is smaller than 0
  bgt a7, a6, _ss_abort2  # index > orig
  lw t3, 12(t2)           # sub length
  add a7, a7, t3          # index+sublength
  bgt a7, a6, _ss_abort3
  bltz t3 _ss_abort4
  lw t4, 8(sp)            # load new length obj
  sw t3, 12(t4)           # save new size
  sw t4, 12(a0)           # store size in string
  lw a7, 12(t1)           # index
  addi a1, a1, 16         # advance src to str
  add a1, a1, a7          # advance to indexed char
  addi a2, a2, 16         # advance dst to str
  beqz t3, _ss_end        # empty length
_ss_loop:
  lb a6, 0(a1)
  addi a1, a1, 1          # inc src
  sb a6, 0(a2)
  addi a2, a2, 1          # inc dst
  addi t3, t3, -1         # dec ctr
  bnez t3, _ss_loop
_ss_end:
  sb zero, 0(a2)          # null terminate
  mv gp, a2
  addi gp, gp, 4          # realign the heap ptr
  li t0, 0xfffffffc
  and gp, gp, t0          # word align gp
  sub t0, gp, a0          # calc object size
  srli t0, t0, 2          # div by 4
  sw t0, 4(a0)
  lw ra, 4(sp)
  addi sp, sp, 20         # pop arguments
  jr ra
_ss_abort1:
  la a1, _sabort_msg1
  j _ss_abort
_ss_abort2:
  la a1, _sabort_msg2
  j _ss_abort
_ss_abort3:
  la a1, _sabort_msg3
  j _ss_abort
_ss_abort4:
  la a1, _sabort_msg4
_ss_abort:
  li a0, 4
  ecall
  la a1, _sabort_msg
  li a0, 4
  ecall
  li a0, 10               # exit
  ecall


#################################################################
#  Memory Allocation                                            #
#                                                               #
#  Allocates the requested amount of memory and returns a       #
#  pointer to the start of the block.                           #
#                                                               #
#  INPUT:                                                       #
#  - a0: size of allocation in bytes                            #
#  - s11: limit pointer of the work area                        #
#  - gp: current allocation pointer                             #
#  - heap_start: start of heap                                  #
#                                                               #
#  OUTPUT:                                                      #
#  - a0: pointer to new memory block                            #
#                                                               #
#  Registers modified:                                          #
#  - a1, gp, collector function                                 #
#################################################################
_MemMgr_Alloc:
  add gp, gp, a0                  # attempt to allocate storage
  blt gp, s11, _MemMgr_Alloc_end  # check allocation
  sub gp, gp, a0                  # restore gp
  addi sp, sp, -4
  sw ra, 4(sp)                    # save return address
  mv a1, a0                       # size
  addi a0, sp, 4                  # end of stack to collect
  jal _NoGC_Collect               # garbage collect
  lw ra, 4(sp)                    # restore return address
  addi sp, sp, 4
  mv a0, a1                       # put size into a0
  add gp, gp, a0                  # allocate storage
_MemMgr_Alloc_end:
  sub a0, gp, a0
  jr ra                           # return


#################################################################
#  Query Memory Allocation                                      #
#                                                               #
#  Verifies that the requested amount of memory can be          #
#  allocated within the work area.                              #
#                                                               #
#  INPUT:                                                       #
#  - a0: size of allocation in bytes                            #
#  - s11: limit pointer of the work area                        #
#  - gp: current allocation pointer                             #
#  - heap_start: start of heap                                  #
#                                                               #
#  OUTPUT:                                                      #
#  - a0: size of allocation in bytes (unchanged)                #
#                                                               #
#  Registers modified:                                          #
#  - t0, a1, collector function                                 #
#################################################################
_MemMgr_QAlloc:
  add t0, gp, a0                   # attempt to allocate storage
  blt t0, s11, _MemMgr_QAlloc_end  # check allocation
  addi sp, sp, -4
  sw ra, 4(sp)                     # save return address
  mv a1, a0                        # size
  addi a0, sp, 4                   # end of stack to collect
  jal _NoGC_Collect                # garbage collect
  lw ra, 4(sp)                     # restore return address
  addi sp, sp, 4
  mv a0, a1                        # put size into a0
_MemMgr_QAlloc_end:
  jr ra                            # return


#################################################################
#  Test heap consistency                                        #
#                                                               #
#  Runs the garbage collector in the hope that this will        #
#  help detect garbage collection bugs earlier                  #
#                                                               #
#  INPUT: (the usual GC stuff)                                  #
#  - s11: limit pointer of the work area                        #
#  - gp: current allocation pointer                             #
#  - heap_start: start of heap                                  #
#                                                               #
#  OUTPUT:                                                      #
#  - none                                                       #
#                                                               #
#  Registers modified:                                          #
#  - t0, a1, a0, collector function                             #
#################################################################
_MemMgr_Test:
  la t0, _MemMgr_TEST         # Check if testing enabled
  lw t0, 0(t0)
  beqz t0, _MemMgr_Test_end
  addi sp, sp, -4             # Save return address
  sw ra, 4(sp)
  li a1, 0                    # size = 0
  addi a0, sp, 4              # end of stack to collect
  jal _NoGC_Collect           # garbage collect
  lw ra, 4(sp)                # restore return address
  addi sp, sp, 4
_MemMgr_Test_end:
  jr ra


#################################################################
#  No Garbage Collector Initialization                          #
#                                                               #
#  NoGC does not attempt to do any garbage collection. It       #
#  simply expands the heap if more memory is needed             #
#                                                               #
#  INPUT:                                                       #
#  - none                                                       #
#                                                               #
#  OUTPUT:                                                      #
#  - gp: lower bound of the work area                           #
#  - s11: upper bound of the work area                          #
#                                                               #
#  Registers modified:                                          #
#  - a0, s11                                                    #
#################################################################
_NoGC_Init:
  la gp, heap_start       # set gp to the start of the heap
  li a0, 9
  li a1, 0x10000          # allocate first 2^16 bytes
  ecall
  li a1, -1
  beq a0, a1, _NoGC_abort # No more heap space ?
  li a0, 9
  li a1, 0
  ecall                   # get heap end
  mv s11, a0              # set limit pointer
  jr ra
_NoGC_abort:
  la a1, _NoGC_abort_msg
  li a0, 4
  ecall
  li a0, 10
  ecall


#################################################################
#  No Garbage Collection                                        #
#                                                               #
#  Expands the heap as necessary                                #
#                                                               #
#  INPUT:                                                       #
#  - a1: size will need to allocate in bytes                    #
#  - s11: limit pointer of the work area                        #
#  - gp: current allocation pointer                             #
#                                                               #
#  OUTPUT:                                                      #
#  - a1: size will need to allocate in bytes (unchanged)        #
#                                                               #
#  Registers modified:                                          #
#  - t0, t6, a0, s11                                            #
#################################################################
_NoGC_Collect:
  mv t6, a1
  la a1, _NoGC_COLLECT            # show collection message
  li a0, 4
  ecall
  mv a1, t6
_NoGC_Collect_loop:
  add t0, gp, a1                  # test allocation
  blt t0, s11, _NoGC_Collect_ok   # stop if enough
  mv t6, a1
  li a0, 9                        # expand heap
  li a1, 0x10000                  # set the size to expand the heap
  ecall                           # sbrk
  li a1, -1
  beq a0, a1, _NoGC_Collect_abort # No more heap space ?
  li a0, 9                        # get heap end
  mv a1, zero
  ecall                           # sbrk
  mv a1, t6
  mv s11, a0                      # set limit pointer
  j _NoGC_Collect_loop            # loop
_NoGC_Collect_ok:
  jr ra                           # return
_NoGC_Collect_abort:
  la a1, _NoGC_abort_msg
  li a0, 4
  ecall
  li a0, 10
  ecall
