function showForm() {
  let formContainer = document.getElementById('form-container');

  formContainer.classList.add('show');

  formContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });

  setTimeout(() => {
    document.getElementById('firstName').focus();
  }, 300); 
}

let users = [];

document.getElementById('my-form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const experience = document.getElementById('experience').value.trim();
  const gender = document.querySelector('input[name="checkGender"]:checked')?.value;

  if (!gender) {
    console.warn('Пол не выбран');
    return;
  }

  console.log('Данные формы:', {
    firstName,
    lastName,
    phone,
    experience,
    gender
  });

  let newUser = {firstName: firstName, lastName: lastName, phone: phone, experience: experience, gender: gender}

  users.push(newUser)

  this.reset();

  alert("Форма была успешно заполнена! Ожидайте обратной связи!")

  console.log(users);
  
});
