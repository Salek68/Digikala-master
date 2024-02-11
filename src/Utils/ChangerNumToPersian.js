export default function ChangerNumToPersian(num) {
  return new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
    style: "decimal",
  }).format(num);
}
