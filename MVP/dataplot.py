# ------------------------- Tk Example -------------------------- 

# https://bit.ly/37jkZo5
# canvas = FigureCanvasTkAgg(fig, master=root)  # A tk.DrawingArea.
# canvas.draw()
# If experiencing memory issues, 

# -------------------- General Usage Example --------------------

# Example for general usage:
# import dataplot
# from matplotlib import pyplot as plt

# data = {'Car': 50, 'Rent': 200, 'Insurance': 25, 'Groceries': 100}
# fig, ax = dataplot.pie(data)
# plt.figure(fig.number)
# plt.show()
# plt.close(fig.number)

# -------------------- Compare Plot Example --------------------

# import dataplot
# from matplotlib import pyplot as plt
# compare_dictionary = {'Car': {'expected': 300, 'actual': 250},
#                       'Living': {'expected': 2000, 'actual': 2500},
#                       'Insurance': {'expected': 200, 'actual': 200}}

# fig, ax = bar_compare(compare_dictionary)
# plt.figure(fig.number)
# plt.show()
# plt.close(fig.number)


# --------------------------- Imports ---------------------------

from matplotlib import pyplot as plt
from matplotlib.patches import Patch
from matplotlib.legend_handler import HandlerTuple
from collections import OrderedDict

# ---------------------- Utility Methods  -----------------------

# Thanks BrechtDeMan from Stack Overflow https://bit.ly/39qDcS0
# Sets fancy labels for pie charts.
def make_autopct(values):
    def my_autopct(pct):
        total = sum(values)
        val = float(pct*total/100.0)
        return '${v:.2f}\n({p:.2f}%) '.format(p=pct,v=val)
    return my_autopct

# Calculates return
def compound(principal, period, interest):
    return principal * pow(1+(0.01*interest), period)

def merge_expected_and_actual_dicts(expected, actual):
    if len(expected) != len(actual):
        # Need to be same size.
        return []
    merged_dict = {}
    for (budget_line, expected_value) in (expected.items()):
        merged_dict[budget_line] = {'expected': expected_value,
                                    'actual': actual[budget_line]}
    return merged_dict

# ------------------------ Plot Methods ------------------------- 

# Takes a dictionary of key:dollar value pairs.
# Returns matplotlib figure and axes objects (pie chart).
def pie(budget_dict):
    # Grab info to pass to pie chart
    labels = budget_dict.keys()
    values = budget_dict.values()
    
    # Make pie chart
    fig, ax = plt.subplots()
    ax.pie(values, labels=labels, autopct=make_autopct(values))
    plt.tight_layout()
    
    # Return graph objects     
    return fig, ax

# Takes a dictionary of key:dollar value pairs.
# Returns matplotlib figure and axes objects (bar chart).
def bar(budget_dict):
    # Grab info to pass to bar chart
    labels = budget_dict.keys()
    values = budget_dict.values()
    index = range(0, len(values))

    # Make bar chart
    fig, ax = plt.subplots()
    ax.bar(index, values, align='center')
    ax.set_xticklabels(labels, rotation=45)
    ax.set_xticks(index)

    # Return graph objects
    return fig, ax

def bar_compare(budget_compare_dict):
    # Check type, if type wrong, return blank plot.
    if (not (isinstance(budget_compare_dict, (dict, OrderedDict)))):
        fig, ax = plt.subplots()
        return fig, ax
    
    # Takes a dictionary of dictionaries, budget_compare_dict
    # First level is budget line items, second is 'expected' and 'actual'.
    labels = list(budget_compare_dict.keys())
    expected_values = []
    actual_values = []
    for i in range(len(labels)):
        expected_values.append(budget_compare_dict[labels[i]]['expected'])
        actual_values.append(budget_compare_dict[labels[i]]['actual'])
    index = list(range(len(labels)))
    #print('{}'.format(index))
    width = 0.35
    width_list = [width]*len(labels)
    #print('{}'.format(width_list))
    ipw = [x+width for x in index]
    #print('{}'.format(ipw))
    ipwd2 = [x+width/2 for x in index]
    

    # Make bar chart
    fig = plt.figure()
    ax = fig.add_subplot(111)
    expected_bars = ax.bar(index, expected_values, width, color='royalblue', edgecolor='k')
    actual_bars = ax.bar(ipw, actual_values, width)

    # Set actual bar colours
    for i in range(len(actual_bars)):
        if actual_values[i] > expected_values[i]:
            actual_bars[i].set_color('r')
        else:
            actual_bars[i].set_color('g')
        actual_bars[i].set_edgecolor('k')

    ax.set_ylabel('Amount ($)')
    ax.set_xlabel('Category')
    ax.set_xticks(ipwd2)
    ax.set_xticklabels(labels, rotation=45)

    expected_legend_entry = Patch(facecolor='royalblue', edgecolor='k')
    actual_legend_entry = (Patch(facecolor='g', edgecolor='k'),
                           Patch(facecolor='r', edgecolor='k'))
    
    ax.legend([expected_legend_entry, (actual_legend_entry)], ['Expected', 'Actual'], handler_map={tuple: HandlerTuple(ndivide=None)} )
    plt.tight_layout()

    # Return graph objects
    return fig, ax
    
# Takes a principal amount, period (in years), and annual interest (%).
# Returns matplotlib figure and axes displaying amount compounding
# over 'years' time period.
def compound_return(principal, period, interest):
    # Generate time data, step changes time resolution.
    step = 1
    times = range(0, period, step)
    
    # Calculate compounded amounts over period.
    amounts = []
    for i in range(len(times)):
        amounts.append(compound(principal, times[i], interest))

    # Create and configure plot
    fig, ax = plt.subplots()
    ax.plot(times, amounts)
    ax.set(xlabel='Time (years)', ylabel='Investment ($)')
    ax.grid()
    fig.tight_layout()

    # Return graph objects
    return fig, ax

# -------------------- End of dataplot.py -----------------------
