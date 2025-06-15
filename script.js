  function showForm(type) {
    const personalForm = document.getElementById('form-personal');
    const corporateForm = document.getElementById('form-corporate');

    if (type === 'personal') {
      personalForm.style.display = 'flex';
      corporateForm.style.display = 'none';
    } else if (type === 'corporate') {
      personalForm.style.display = 'none';
      corporateForm.style.display = 'flex';
    }
  }
  