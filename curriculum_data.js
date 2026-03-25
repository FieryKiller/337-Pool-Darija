const fullCurriculum = {
    "Introduction to the Piscine": [
        { 
            category: "Core Philosophy", 
            topics: ["Problem Solving", "Memory Understanding", "Discipline"],
            details: "The Piscine is about reading carefully, respecting requirements, and thinking before coding. It's an intensive period for algorithms and C programming."
        }
    ],
    "Day 00: Shell Basics": [
        { 
            category: "Main Concepts", 
            topics: ["Navigation", "Permissions", "File Management"],
            details: "Learning how to move between folders, create/remove files, and understand paths. Essential commands: pwd, ls, cd, mkdir, touch, rm, cat."
        },
        {
            category: "Q&A",
            topics: ["pwd", "rm vs rmdir"],
            details: "pwd prints the current working directory. rm removes files, while rmdir removes only empty directories."
        }
    ],
    "Day 01: Environment": [
        { 
            category: "Main Concepts", 
            topics: ["Permissions (rwx)", "Hidden Files", "Pipelines"],
            details: "chmod 755 changes permissions. ls -a shows hidden files starting with a dot."
        }
    ],
    "Day 02: First C Contact": [
        { 
            category: "Main Concepts", 
            topics: ["Main Function", "write()", "Compilation"],
            details: "gcc main.c -o program compiles your source. write(1, 'Hello', 5) prints to standard output. unistd.h is required for write."
        }
    ],
    "Day 03: Variables & Types": [
        { 
            category: "Main Concepts", 
            topics: ["int", "char", "printf"],
            details: "int stores integers, char stores single characters. Usage: int a = 42; char c = 'A';"
        }
    ],
    "Day 04: Control Flow": [
        { 
            category: "Main Concepts", 
            topics: ["if/else", "Comparison Operators", "Logical Operators"],
            details: "== for comparison, = for assignment. && is logical AND, || is logical OR."
        }
    ],
    "Day 05: Loops": [
        { 
            category: "Main Concepts", 
            topics: ["while", "for", "Infinite Loops"],
            details: "Repetition until a condition is false. Always ensure the loop variable changes (e.g., i++)."
        }
    ],
    "Day 06: Functions": [
        { 
            category: "Main Concepts", 
            topics: ["Parameters", "Return Values", "Modularity"],
            details: "Organizing code into reusable parts. return sends a value back from the function."
        }
    ],
    "Day 07: Arrays & Strings": [
        { 
            category: "Main Concepts", 
            topics: ["char arrays", "Null Terminator (\\0)"],
            details: "Strings in C are char arrays ending with \\0. \"Hello\" takes 6 bytes in memory."
        }
    ],
    "Day 08: Pointers": [
        { 
            category: "Main Concepts", 
            topics: ["Addresses (&)", "Dereferencing (*)"],
            details: "A pointer stores an address. *p gets the value at that address, &a gets the address of a."
        }
    ],
    "Day 09: Value Swap": [
        { 
            category: "Main Concepts", 
            topics: ["Passing by Address"],
            details: "Allows functions to modify original variables. Example: void ft_swap(int *a, int *b)."
        }
    ],
    "C00: Practice": [
        { 
            category: "Exercises", 
            topics: ["ft_putchar", "ft_print_alphabet", "ft_print_comb"],
            details: "Focus on simple output and nested loops for combinations."
        }
    ],
    "C01: Pointers Advanced": [
        { 
            category: "Exercises", 
            topics: ["ft_ft", "ft_ultimate_ft", "ft_strlen", "ft_rev_int_tab"],
            details: "Manipulation of deep pointers (9 levels) and array reversal."
        }
    ],
    "C02: Strings I": [
        { 
            category: "Exercises", 
            topics: ["ft_strcpy", "ft_str_is_alpha", "ft_strcapitalize"],
            details: "Cloning string logic and validating character types."
        }
    ],
    "C03: Strings II": [
        { 
            category: "Exercises", 
            topics: ["ft_strcmp", "ft_strncmp", "ft_strstr"],
            details: "Comparison logic and substring searching."
        }
    ],
    "C04: Utilities": [
        { 
            category: "Exercises", 
            topics: ["ft_putnbr", "ft_atoi"],
            details: "Printing integers and converting strings to integers by skipping spaces/signs."
        }
    ],
    "C05: Recursion": [
        { 
            category: "Exercises", 
            topics: ["ft_factorial", "ft_fibonacci", "ft_sqrt"],
            details: "Solving problems by calling the same function until the base case is reached."
        }
    ],
    "C06: CLI Arguments": [
        { 
            category: "Exercises", 
            topics: ["argc", "argv"],
            details: "Accessing command-line inputs. argv[0] is the program name."
        }
    ],
    "C07: Memory Allocation": [
        { 
            category: "Exercises", 
            topics: ["malloc", "free", "ft_range"],
            details: "Allocating memory on the heap. Always check for NULL return."
        }
    ],
    "C08: Headers & Structs": [
        { 
            category: "Exercises", 
            topics: ["#ifndef", "typedef struct"],
            details: "Organizing prototypes and defining custom data types."
        }
    ],
    "C09: Static Library": [
        { 
            category: "Exercises", 
            topics: ["ar rc", "libft.a"],
            details: "Bundling multiple .o files into a single library archive."
        }
    ],
    "C10: File Operations": [
        { 
            category: "Exercises", 
            topics: ["open", "read", "close"],
            details: "Working with file descriptors and system calls for I/O."
        }
    ],
    "Final Advice": [
        { 
            category: "Strategy", 
            topics: ["Read Subject", "Norminette", "Edge Cases"],
            details: "Test small cases first. Compile with -Wall -Wextra -Werror. Never memorize blindly."
        }
    ]
};
