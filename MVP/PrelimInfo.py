import re  # Match text patterns
import dataplot  # To make plots
from matplotlib import pyplot as plt  # To show plots

province_codes = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"]
income = {}
expenses = {}
taxes = {}
real_time = {}

def federal_tax_bracket(annual):
    if annual <= 48535:
        designation = "1st"
        federal_tax = 0.15 * annual

    elif annual <= 97069:
        designation = "2nd"
        federal_tax = 0.15 * 48535 + 0.205 * (annual - 48535)

    elif annual <= 150473:
        designation = "3rd"
        federal_tax = 0.15 * 48535 + 0.205 * 48534 + 0.26 * (annual - 97069)

    elif annual <= 214368:
        designation = "4th"
        federal_tax = 0.15 * 48535 + 0.205 * 48534 + 0.26 * 53404 + 0.29 * (annual - 150473)

    else:
        designation = "5th"
        federal_tax = 0.33 * (annual - (0.15 * 48535 + 0.205 * 48434 + 0.26 * 53404 + 0.29 * 214368))

    text = ("Your annual salary places you in the " + designation + " federal tax bracket. Annually, you pay $"
          + "{0:.2f}".format(federal_tax) + " in federal taxes.")

    return federal_tax,text

def provincial_tax_bracket(annual, province):
    # ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"]
    if province == "AB":
        if annual <= 131220:
            designation = "1st"
            provincial_tax = 0.1 * annual

        elif annual <= 157464:
            designation = "2nd"
            provincial_tax = 0.1 * 131220 + 0.12 * (annual - 131220)

        elif annual <= 209952:
            designation = "3rd"
            provincial_tax = 0.1 * 131220 + 0.12 * 26244 + 0.13 * (annual - 157464)

        elif annual <= 314928:
            designation = "4th"
            provincial_tax = 0.1 * 131220 + 0.12 * 26244 + 0.13 * 52488 + 0.14 * (annual - 209952)

        else:
            designation = "5th"
            provincial_tax = 0.15 * (annual - (0.1 * 131220 + 0.12 * 26244 + 0.13 * 52488 + 0.14 * 209952))

    if province == "BC":
        if annual <= 41725:
            designation = "1st"
            provincial_tax = 0.0506 * annual

        elif annual <= 83451:
            designation = "2nd"
            provincial_tax = 0.0506 * 41725 + 0.0707 * (annual - 41725)

        elif annual <= 95812:
            designation = "3rd"
            provincial_tax = 0.0506 * 41725 + 0.0707 * 41726 + 0.105 * (annual - 83451)

        elif annual <= 116344:
            designation = "4th"
            provincial_tax = 0.0506 * 41725 + 0.0707 * 41726 + 0.105 * 12361 + 0.1229 * (annual - 95812)

        elif annual <= 157748:
            designation = "5th"
            provincial_tax = 0.0506 * 41725 + 0.0707 * 41726 + 0.105 * 12361 + 0.1229 * 20532 + 0.147 * (
                        annual - 116344)

        else:
            designation = "6th"
            provincial_tax = 0.168 * (
                        annual - (0.0506 * 41725 + 0.0707 * 41726 + 0.105 * 12361 + 0.1229 * 20532 + 0.147 * 41404))

    if province == "MB":
        if annual <= 33389:
            designation = "1st"
            provincial_tax = 0.108 * annual

        elif annual <= 72164:
            designation = "2nd"
            provincial_tax = 0.108 * 33389 + 0.1275 * (annual - 33389)

        else:
            designation = "3rd"
            provincial_tax = 0.174 * (annual - (0.108 * 33389 + 0.1275 * 38775))

    if province == "NB":
        if annual <= 43401:
            designation = "1st"
            provincial_tax = 0.0968 * annual

        elif annual <= 86803:
            designation = "2nd"
            provincial_tax = 0.0968 * 43401 + 0.1482 * (annual - 43401)

        elif annual <= 141122:
            designation = "3rd"
            provincial_tax = 0.0968 * 43401 + 0.1482 * 43402 + 0.1652 * (annual - 86803)

        elif annual <= 160776:
            designation = "4th"
            provincial_tax = 0.0968 * 43401 + 0.1482 * 43402 + 0.1652 * 54319 + 0.1784 * (annual - 141122)

        else:
            designation = "5th"
            provincial_tax = 0.203 * (annual - (0.0968 * 43401 + 0.1482 * 43402 + 0.1652 * 54319 + 0.1784 * 19654))

    if province == "NL":
        if annual <= 37929:
            designation = "1st"
            provincial_tax = 0.087 * annual

        elif annual <= 75858:
            designation = "2nd"
            provincial_tax = 0.087 * 37929 + 0.145 * (annual - 37929)

        elif annual <= 135432:
            designation = "3rd"
            provincial_tax = 0.087 * 37929 + 0.145 * 37929 + 0.158 * (annual - 75858)

        elif annual <= 189604:
            designation = "4th"
            provincial_tax = 0.087 * 37929 + 0.145 * 37929 + 0.158 * 59574 + 0.173 * (annual - 135432)

        else:
            designation = "5th"
            provincial_tax = 0.183 * (annual - (0.087 * 37929 + 0.145 * 37929 + 0.158 * 59574 + 0.173 * 54172))

    if province == "NS":
        if annual <= 29590:
            designation = "1st"
            provincial_tax = 0.0879 * annual

        elif annual <= 59180:
            designation = "2nd"
            provincial_tax = 0.0879 * 29590 + 0.1495 * (annual - 29590)

        elif annual <= 93000:
            designation = "3rd"
            provincial_tax = 0.0879 * 29590 + 0.1495 * 29590 + 0.1667 * (annual - 59180)

        elif annual <= 150000:
            designation = "4th"
            provincial_tax = 0.0879 * 29590 + 0.1495 * 29590 + 0.1667 * 33820 + 0.175 * (annual - 93000)

        else:
            designation = "5th"
            provincial_tax = 0.21 * (annual - (0.0879 * 29590 + 0.1495 * 29590 + 0.1667 * 33820 + 0.175 * 57000))

    if province == "NT":
        if annual <= 43957:
            designation = "1st"
            provincial_tax = 0.059 * annual

        elif annual <= 87916:
            designation = "2nd"
            provincial_tax = 0.059 * 43957 + 0.086 * (annual - 43957)

        elif annual <= 142932:
            designation = "3rd"
            provincial_tax = 0.059 * 43957 + 0.086 * 43959 + 0.122 * (annual - 87916)

        else:
            designation = "4th"
            provincial_tax = 0.1405 * (annual - (0.059 * 43957 + 0.086 * 43959 + 0.122 * 55106))

    if province == "NU":
        if annual <= 46277:
            designation = "1st"
            provincial_tax = 0.04 * annual

        elif annual <= 92555:
            designation = "2nd"
            provincial_tax = 0.04 * 46277 + 0.07 * (annual - 46277)

        elif annual <= 150473:
            designation = "3rd"
            provincial_tax = 0.04 * 46277 + 0.07 * 46278 + 0.09 * (annual - 92555)

        else:
            designation = "4th"
            provincial_tax = 0.115 * (annual - (0.04 * 46277 + 0.07 * 46278 + 0.09 * 57918))

    if province == "ON":
        if annual <= 44740:
            designation = "1st"
            provincial_tax = 0.0505 * annual

        elif annual <= 89482:
            designation = "2nd"
            provincial_tax = 0.0505 * 44740 + 0.0915 * (annual - 44740)

        elif annual <= 150000:
            designation = "3rd"
            provincial_tax = 0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * (annual - 89482)

        elif annual <= 220000:
            designation = "4th"
            provincial_tax = 0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * 60518 + 0.1216 * (annual - 150000)

        else:
            designation = "5th"
            provincial_tax = 0.21 * (annual - (0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * 60518 + 0.1216 * 70000))

    if province == "PE":
        designation = "1st"
        if annual <= 31984:
            provincial_tax = 0.098 * 31984

        elif annual <= 220000:
            designation = "2nd"
            provincial_tax = 0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * 60518 + 0.1216 * (annual - 150000)

        else:
            designation = "3rd"
            provincial_tax = 0.21 * (annual - (0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * 60518 + 0.1216 * 70000))

    if province == "QC":
        if annual <= 44545:
            designation = "1st"
            provincial_tax = 0.15 * annual

        elif annual <= 89080:
            designation = "2nd"
            provincial_tax = 0.15 * 44545 + 0.2 * (annual - 44545)

        elif annual <= 108390:
            designation = "3rd"
            provincial_tax = 0.15 * 44545 + 0.2 * 44535 + 0.24 * (annual - 89080)

        else:
            designation = "4th"
            provincial_tax = 0.2575 * (annual - (0.15 * 44545 + 0.2 * 44535 + 0.24 * 19310))

    if province == "SK":
        if annual <= 45225:
            designation = "1st"
            provincial_tax = 0.105 * annual

        elif annual <= 129214:
            designation = "2nd"
            provincial_tax = 0.105 * 45225 + 0.125 * (annual - 45225)

        else:
            designation = "3rd"
            provincial_tax = 0.145 * (annual - (0.105 * 45225 + 0.125 * 83989))

    if province == "YT":
        if annual <= 48535:
            designation = "1st"
            provincial_tax = 0.064 * annual

        elif annual <= 97069:
            designation = "2nd"
            provincial_tax = 0.064 * 48535 + 0.09 * (annual - 48535)

        elif annual <= 151473:
            designation = "3rd"
            provincial_tax = 0.064 * 48535 + 0.09 * 48534 + 0.109 * (annual - 97069)

        elif annual <= 501000:
            designation = "4th"
            provincial_tax = 0.064 * 48535 + 0.09 * 48534 + 0.109 * 54404 + 0.128 * (annual - 151473)

        else:
            designation = "5th"
            provincial_tax = 0.15 * (annual - (0.064 * 48535 + 0.09 * 48534 + 0.109 * 54404 + 0.128 * 349527))

    text = ("Your annual salary places you in the " + designation + " provincial tax bracket for " + province +
          ". Annually, you pay $" + "{0:.2f}".format(provincial_tax) + " in provincial taxes.")

    return provincial_tax,text

def calculate_provincial_tax():
    taxes['provincial'],text = provincial_tax_bracket(income['salary'], taxes['province_code'])
    return text

def calculate_federal_tax():
    taxes['federal'],text = federal_tax_bracket(income['salary'])
    return text

def calculate_total_tax():
    textp = calculate_provincial_tax()
    textf = calculate_federal_tax()
    taxes['total'] = taxes['provincial'] + taxes['federal']
    return textp,textf

#def display_total_tax():
#    print("In total, you pay $" + "{0:.2f}".format(taxes['total']) + " annually in taxes.")

def display_financial_summary():
    take_home_monthly = (income['salary'] - taxes['total'])/12
    necessities = (expenses['rent'] + expenses['internet']
                   + expenses['phone'] + expenses['groceries']
                   + expenses['commute'] + expenses['utility'])
    luxuries = expenses['entertainment'] + expenses['hobbies']
    remaining = take_home_monthly - necessities - luxuries
    return(take_home_monthly,necessities,luxuries,remaining)
#    print("Monthly Take-Home Income: $" + "{0:.2f}".format(take_home_monthly))
#    print("Necessities: $" + "{0:.2f}".format(necessities))
#    print("Luxury: $" + "{0:.2f}".format(luxuries))
#    print("Remaining: $" + "{0:.2f}".format(remaining))

    return []

def get_expense_plot():
    expense_fig, expense_ax = dataplot.pie(expenses)
    return expense_fig, expense_ax

def get_bar_plot():
    expense_fig, expense_ax = dataplot.bar(real_time)
    return expense_fig, expense_ax
    
def get_comp_plot():
    Comp = dataplot.merge_expected_and_actual_dicts(expenses, real_time)
    expense_fig, expense_ax = dataplot.bar_compare(Comp)
    return expense_fig, expense_ax
# while True:
#     get_salary()
#     get_province_code()
#     expenses = get_expenses()
#     calculate_total_tax()
#     display_total_tax()
#     display_financial_summary()
#     get_expense_plot()
#     break



