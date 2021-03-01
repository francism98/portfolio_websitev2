const containerProject = Array.from(document.getElementsByClassName('container-project'));
const projectContainer = document.querySelector('#projects .container');
const projectPreview1 = document.querySelector('.project-preview1');
const projectPreview2 = document.querySelector('.project-preview2');
const projectPreviewImg1 = document.querySelector('.project-preview1 img');
const projectPreviewImg2 = document.querySelector('.project-preview2 img');
const projectSamples = document.querySelector('.project-samples');

  containerProject[0].addEventListener('mouseover', () => {
    for (items of containerProject) {
      items.style.height = '10%';
    }
    containerProject[0].style.height = '80%';
    projectContainer.classList.remove('project2');
    projectContainer.classList.add('project1');
    projectPreview2.classList.remove('show');
    projectPreview1.classList.add('show');
    console.log(containerProject[0]);
  })
  projectSamples.addEventListener('mouseleave', () => {
    projectContainer.classList.remove('project1');
    projectContainer.classList.remove('project2');
    projectPreview1.classList.remove('show');
    projectPreview2.classList.remove('show');
    for (items of containerProject) {
      items.style.height = '25%';
    }
    projectSamples.style.justifyContent = 'flex-start';
  })

  containerProject[1].addEventListener('mouseover', () => {
    for (items of containerProject) {
      items.style.height = '10%';
    }
    containerProject[1].style.height = '80%';
    projectContainer.classList.remove('project1');
    projectContainer.classList.add('project2');
    projectPreview1.classList.remove('show');
    projectPreview2.classList.add('show');
  })


