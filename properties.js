document.getElementById('toggleSwitch').addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    document.getElementById('toggleSwitch').value = isChecked ? 'on' : 'off';
    console.log(document.getElementById('toggleSwitch').value);
});