export default function federal_tax_bracket(annual) {
  var f_designation;
  var federal_tax;

  if (annual == 0) {
    federal_tax = 'Not applicable';
    f_designation = 'Not applicable';
  }

  if (annual <= 48535) {
    f_designation = '1st';
    federal_tax = 0.15 * annual;
  } else if (annual <= 97069) {
    f_designation = '2nd';
    federal_tax = 0.15 * 48535 + 0.205 * (annual - 48535);
  } else if (annual <= 150473) {
    f_designation = '3rd';
    federal_tax =
      0.15 * 48535 + 0.205 * 48534 + 0.26 * (annual - 97069);
  } else if (annual <= 214368) {
    f_designation = '4th';
    federal_tax =
      0.15 * 48535 +
      0.205 * 48534 +
      0.26 * 53404 +
      0.29 * (annual - 150473);
  } else {
    f_designation = '5th';
    federal_tax =
      0.33 *
      (annual -
        (0.15 * 48535 +
          0.205 * 48434 +
          0.26 * 53404 +
          0.29 * 214368));
  }

  console.log('Returning val - ', parseFloat(federal_tax).toFixed(2));
  return [f_designation, parseFloat(federal_tax).toFixed(2)];
}
