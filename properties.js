document.getElementById('toggleSwitch').addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    document.getElementById('toggleSwitch').value = isChecked ? 'on' : 'off';
    console.log(document.getElementById('toggleSwitch').value);
});
// javaScript > jSon > qrcode
const leftZone = document.getElementById("leftZone");
const autoAmpPts = document.getElementsById("autoAmpPts");
const autoSpPts = document.getElementById("autoSpPts");

const teleAmpPts = document.getElementById("teleAmpPts");
const teleSpPts = document.getElementById("teleSpPts");

