const containerProject = Array.from(document.getElementsByClassName('container-project'));
  const projectContainer = document.querySelector('#projects .container');

  containerProject[0].addEventListener('mouseover', () => {
    projectContainer.classList.add('project1');
    console.log(projectContainer);
  })
  containerProject[0].addEventListener('mouseleave', () => {
    projectContainer.classList.remove('project1');
  })

  containerProject[1].addEventListener('mouseover', () => {
    projectContainer.classList.add('project2');
    console.log(projectContainer);
  })
  containerProject[1].addEventListener('mouseleave', () => {
    projectContainer.classList.remove('project2');
  })


