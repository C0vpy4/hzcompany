#!/usr/bin/env python3
import sys

def balanced(s: str) -> bool:
    bal = 0
    for ch in s:
        if ch == '(':
            bal += 1
        elif ch == ')':
            bal -= 1
            if bal < 0:
                return False
    return bal == 0

def main():
    # Если переданы аргументы — каждый аргумент это отдельный кейс.
    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            print("passed" if balanced(arg) else "failed")
        return

    # Иначе читаем из STDIN построчно: один кейс — одна строка.
    for line in sys.stdin:
        s = line.rstrip('\n')  # сохраняем все печатаемые символы, кроме завершающего \n
        print("passed" if balanced(s) else "failed")

if __name__ == "__main__":
    main()