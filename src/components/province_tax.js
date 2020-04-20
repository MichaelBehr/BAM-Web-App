export default function provincial_tax_bracket(annual, province) {
  var province = province.toUpperCase().replace(/\s+/g, '');

  var p_designation;
  var provincial_tax;

  if (province == '' || annual == 0) {
    provincial_tax = 'Not applicable';
    p_designation = 'Not applicable';
  }

  if (province === 'AB') {
    if (annual <= 131220) {
      p_designation = '1st';
      provincial_tax = 0.1 * annual;
    } else if (annual <= 157464) {
      p_designation = '2nd';
      provincial_tax = 0.1 * 131220 + 0.12 * (annual - 131220);
    } else if (annual <= 209952) {
      p_designation = '3rd';
      provincial_tax =
        0.1 * 131220 + 0.12 * 26244 + 0.13 * (annual - 157464);
    } else if (annual <= 314928) {
      p_designation = '4th';
      provincial_tax =
        0.1 * 131220 +
        0.12 * 26244 +
        0.13 * 52488 +
        0.14 * (annual - 209952);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.15 *
        (annual -
          (0.1 * 131220 +
            0.12 * 26244 +
            0.13 * 52488 +
            0.14 * 209952));
    }
  }

  if (province === 'BC') {
    if (annual <= 41725) {
      p_designation = '1st';
      provincial_tax = 0.0506 * annual;
    } else if (annual <= 83451) {
      p_designation = '2nd';
      provincial_tax = 0.0506 * 41725 + 0.0707 * (annual - 41725);
    } else if (annual <= 95812) {
      p_designation = '3rd';
      provincial_tax =
        0.0506 * 41725 + 0.0707 * 41726 + 0.105 * (annual - 83451);
    } else if (annual <= 116344) {
      p_designation = '4th';
      provincial_tax =
        0.0506 * 41725 +
        0.0707 * 41726 +
        0.105 * 12361 +
        0.1229 * (annual - 95812);
    } else if (annual <= 157748) {
      p_designation = '5th';
      provincial_tax =
        0.0506 * 41725 +
        0.0707 * 41726 +
        0.105 * 12361 +
        0.1229 * 20532 +
        0.147 * (annual - 116344);
    } else {
      p_designation = '6th';
      provincial_tax =
        0.168 *
        (annual -
          (0.0506 * 41725 +
            0.0707 * 41726 +
            0.105 * 12361 +
            0.1229 * 20532 +
            0.147 * 41404));
    }
  }

  if (province === 'MB') {
    if (annual <= 33389) {
      p_designation = '1st';
      provincial_tax = 0.108 * annual;
    } else if (annual <= 72164) {
      p_designation = '2nd';
      provincial_tax = 0.108 * 33389 + 0.1275 * (annual - 33389);
    } else {
      p_designation = '3rd';
      provincial_tax =
        0.174 * (annual - (0.108 * 33389 + 0.1275 * 38775));
    }
  }

  if (province === 'NB') {
    if (annual <= 43401) {
      p_designation = '1st';
      provincial_tax = 0.0968 * annual;
    } else if (annual <= 86803) {
      p_designation = '2nd';
      provincial_tax = 0.0968 * 43401 + 0.1482 * (annual - 43401);
    } else if (annual <= 141122) {
      p_designation = '3rd';
      provincial_tax =
        0.0968 * 43401 + 0.1482 * 43402 + 0.1652 * (annual - 86803);
    } else if (annual <= 160776) {
      p_designation = '4th';
      provincial_tax =
        0.0968 * 43401 +
        0.1482 * 43402 +
        0.1652 * 54319 +
        0.1784 * (annual - 141122);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.203 *
        (annual -
          (0.0968 * 43401 +
            0.1482 * 43402 +
            0.1652 * 54319 +
            0.1784 * 19654));
    }
  }

  if (province === 'NL') {
    if (annual <= 37929) {
      p_designation = '1st';
      provincial_tax = 0.087 * annual;
    } else if (annual <= 75858) {
      p_designation = '2nd';
      provincial_tax = 0.087 * 37929 + 0.145 * (annual - 37929);
    } else if (annual <= 135432) {
      p_designation = '3rd';
      provincial_tax =
        0.087 * 37929 + 0.145 * 37929 + 0.158 * (annual - 75858);
    } else if (annual <= 189604) {
      p_designation = '4th';
      provincial_tax =
        0.087 * 37929 +
        0.145 * 37929 +
        0.158 * 59574 +
        0.173 * (annual - 135432);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.183 *
        (annual -
          (0.087 * 37929 +
            0.145 * 37929 +
            0.158 * 59574 +
            0.173 * 54172));
    }
  }

  if (province === 'NS') {
    if (annual <= 29590) {
      p_designation = '1st';
      provincial_tax = 0.0879 * annual;
    } else if (annual <= 59180) {
      p_designation = '2nd';
      provincial_tax = 0.0879 * 29590 + 0.1495 * (annual - 29590);
    } else if (annual <= 93000) {
      p_designation = '3rd';
      provincial_tax =
        0.0879 * 29590 + 0.1495 * 29590 + 0.1667 * (annual - 59180);
    } else if (annual <= 150000) {
      p_designation = '4th';
      provincial_tax =
        0.0879 * 29590 +
        0.1495 * 29590 +
        0.1667 * 33820 +
        0.175 * (annual - 93000);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.21 *
        (annual -
          (0.0879 * 29590 +
            0.1495 * 29590 +
            0.1667 * 33820 +
            0.175 * 57000));
    }
  }

  if (province === 'NT') {
    if (annual <= 43957) {
      p_designation = '1st';
      provincial_tax = 0.059 * annual;
    } else if (annual <= 87916) {
      p_designation = '2nd';
      provincial_tax = 0.059 * 43957 + 0.086 * (annual - 43957);
    } else if (annual <= 142932) {
      p_designation = '3rd';
      provincial_tax =
        0.059 * 43957 + 0.086 * 43959 + 0.122 * (annual - 87916);
    } else {
      p_designation = '4th';
      provincial_tax =
        0.1405 *
        (annual - (0.059 * 43957 + 0.086 * 43959 + 0.122 * 55106));
    }
  }

  if (province === 'NU') {
    if (annual <= 46277) {
      p_designation = '1st';
      provincial_tax = 0.04 * annual;
    } else if (annual <= 92555) {
      p_designation = '2nd';
      provincial_tax = 0.04 * 46277 + 0.07 * (annual - 46277);
    } else if (annual <= 150473) {
      p_designation = '3rd';
      provincial_tax =
        0.04 * 46277 + 0.07 * 46278 + 0.09 * (annual - 92555);
    } else {
      p_designation = '4th';
      provincial_tax =
        0.115 *
        (annual - (0.04 * 46277 + 0.07 * 46278 + 0.09 * 57918));
    }
  }

  if (province === 'ON') {
    if (annual <= 44740) {
      p_designation = '1st';
      provincial_tax = 0.0505 * annual;
    } else if (annual <= 89482) {
      p_designation = '2nd';
      provincial_tax = 0.0505 * 44740 + 0.0915 * (annual - 44740);
    } else if (annual <= 150000) {
      p_designation = '3rd';
      provincial_tax =
        0.0505 * 44740 + 0.0915 * 44742 + 0.1116 * (annual - 89482);
    } else if (annual <= 220000) {
      p_designation = '4th';
      provincial_tax =
        0.0505 * 44740 +
        0.0915 * 44742 +
        0.1116 * 60518 +
        0.1216 * (annual - 150000);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.21 *
        (annual -
          (0.0505 * 44740 +
            0.0915 * 44742 +
            0.1116 * 60518 +
            0.1216 * 70000));
    }
  }

  if (province === 'PE') {
    if (annual <= 31984) {
      p_designation = '1st';
      provincial_tax = 0.098 * 31984;
    } else if (annual <= 220000) {
      p_designation = '2nd';
      provincial_tax =
        0.0505 * 44740 +
        0.0915 * 44742 +
        0.1116 * 60518 +
        0.1216 * (annual - 150000);
    } else {
      p_designation = '3rd';
      provincial_tax =
        0.21 *
        (annual -
          (0.0505 * 44740 +
            0.0915 * 44742 +
            0.1116 * 60518 +
            0.1216 * 70000));
    }
  }

  if (province === 'QC') {
    if (annual <= 44545) {
      p_designation = '1st';
      provincial_tax = 0.15 * annual;
    } else if (annual <= 89080) {
      p_designation = '2nd';
      provincial_tax = 0.15 * 44545 + 0.2 * (annual - 44545);
    } else if (annual <= 108390) {
      p_designation = '3rd';
      provincial_tax =
        0.15 * 44545 + 0.2 * 44535 + 0.24 * (annual - 89080);
    } else {
      p_designation = '4th';
      provincial_tax =
        0.2575 *
        (annual - (0.15 * 44545 + 0.2 * 44535 + 0.24 * 19310));
    }
  }

  if (province === 'SK') {
    if (annual <= 45225) {
      p_designation = '1st';
      provincial_tax = 0.105 * annual;
    } else if (annual <= 129214) {
      p_designation = '2nd';
      provincial_tax = 0.105 * 45225 + 0.125 * (annual - 45225);
    } else {
      p_designation = '3rd';
      provincial_tax =
        0.145 * (annual - (0.105 * 45225 + 0.125 * 83989));
    }
  }

  if (province === 'YT') {
    if (annual <= 48535) {
      p_designation = '1st';
      provincial_tax = 0.064 * annual;
    } else if (annual <= 97069) {
      p_designation = '2nd';
      provincial_tax = 0.064 * 48535 + 0.09 * (annual - 48535);
    } else if (annual <= 151473) {
      p_designation = '3rd';
      provincial_tax =
        0.064 * 48535 + 0.09 * 48534 + 0.109 * (annual - 97069);
    } else if (annual <= 501000) {
      p_designation = '4th';
      provincial_tax =
        0.064 * 48535 +
        0.09 * 48534 +
        0.109 * 54404 +
        0.128 * (annual - 151473);
    } else {
      p_designation = '5th';
      provincial_tax =
        0.15 *
        (annual -
          (0.064 * 48535 +
            0.09 * 48534 +
            0.109 * 54404 +
            0.128 * 349527));
    }
  }

  return [p_designation, parseFloat(provincial_tax).toFixed(2)];
}
