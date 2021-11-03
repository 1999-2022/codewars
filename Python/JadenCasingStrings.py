##
## Jaden Casing Strings
## https://www.codewars.com/kata/5390bac347d09b7da40006f6
##

import re

def to_jaden_case(string):
    def convert_into_uppercase(a):
        return a.group(1) + a.group(2).upper()
    result = re.sub("(^|\s)(\S)", convert_into_uppercase, string)
    return result