angular.module('myWebsite.slides', [])

.factory('Slides', function() {
  var serveSlide = function(id) {
    return slides[id];
  }

  var transitionDirection = function(newDirection) {
    var oldDirection = newDirection === 'left' ? 'right' : 'left';
    document.body.classList.remove(oldDirection);
    document.body.classList.add(newDirection);
  }
  var slides = [
    {
      title: 'Building and Animating a 3D Character',
      points: [],
      img: [],
      uiclass: 'centerMessage'
    },
    {
      title: 'Concept',
      points: ['Style of movement',
               'Personality',
               'Theme consistency',
               'Create list of required assets',
               'Establish time complexity'
              ],
      img: ['../assets/FirefliesConceptOrig.jpg', '../assets/Characterlineup.jpg']
    },
    {
      title: 'Modeling',
      points: ['Plan out needed topology for animation and dynamics',
               'Keep track of vertex count and/or maintain high/low resolution versions',
               'Generate UV map',
               'Texture model (shaders, images, etc)',
               'Create blendshapes and extra character assets'
              ],
      img: ['../assets/bassWireframe.jpg', '../assets/bassTexture.jpg']
    },
    {
      title: 'Rigging',
      points: ['The engine controlling a character',
               'Establish bone structure for model',
               '\'Skin\' a model for animation',
               'Create response handlers for animation',
               'Organization and UI for animation'
              ],
      img: ['../assets/AtlasRig.jpg', '../assets/meryRig.jpg']
    },
    {
      title: 'Animation',
      points: ['Acting with a pencil',
               'Blocking, passing, and refining',
               'Timing, exaggeration, and personality',
               'Keyed Animation vs. Motion capture',
              ],
      img: ['../assets/WalkCycle.jpg', '../assets/AnimatedCharacter.gif']
    },
    {
      title: 'Fin',
      points: [],
      img: ['../assets/anna.gif'],
      imgId: 'centerImg'
    }
  ]
  return {
    transition: transitionDirection,
    serveSlide: serveSlide
  };
});
