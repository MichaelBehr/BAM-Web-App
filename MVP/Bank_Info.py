import re

def financial_info(transit,institution,account):

    transit_number_rx = re.compile(r'^\s*[0-9]{5}\s*$')
    financial_institution_number_rx = re.compile(r'^\s*[0-9]{3}\s*$')
    account_number_rx = re.compile(r'^\s*[0-9]{7}\s*$')

    if (transit_number_rx.fullmatch(transit) and account_number_rx.fullmatch(account) and financial_institution_number_rx.fullmatch(institution)):
        return(True)
    else:
        return(False)