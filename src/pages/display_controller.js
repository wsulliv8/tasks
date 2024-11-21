export { displayController };


const displayController = (function() {
  const addProject = document.querySelector('#add-project'),
        closeModal = document.querySelector('.close-modal');
  addProject.addEventListener('click', () => modal.style.display = 'flex');
  
  closeModal.addEventListener('click', () => modal.style.display = 'none')
  const modal = document.querySelector('.modal');

})(); 