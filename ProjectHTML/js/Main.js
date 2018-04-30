var degrees = 0;
var row1 = [
              {
                name: 'HTML',
                status: 'show',
                type: 'js',
              }, 
              {
                name: 'Javascript',
                status: 'show',
                type: 'js'
              }, 
              {
                name: 'notas',
                status: 'show',
                type: 'js'
              }, 
              {
                name: 'notas1',
                status: 'show',
                type: 'js'
              }
            ]

var row2 = [
            {
              name: 'HTML',
              status: 'show',
              type: 'js',
            },
            {
              name: 'Javascript',
              status: 'show',
              type: 'js'
            },
            {
              name: 'notas',
              status: 'show',
              type: 'paper'
            },
            {
              name: 'notas1',
              status: 'show',
              type: 'paper'
            }
          ]

var row3 = [
              {
              name: 'HTML',
              status: 'show',
              type: 'js',
              },
              {
              name: 'Javascript',
              status: 'show',
              type: 'js'
              },
              {
              name: 'notas',
              status: 'show',
              type: 'html'
              },
              {
              name: 'notas1',
              status: 'show',
              type: 'html'
              }
            ]

window.onkeydown = function (e) {
  var key = e.keyCode ? e.keyCode : e.which;
  console.log(key)
  switch (key) {
    // up
    case 38:
      degrees--;
      $('.world').css({
        'transform': 'rotate3d(1, 0, 0, ' + degrees + 'deg)'
      })
      break;
    // down
    case 40:
      degrees++;
      $('.world').css({
        'transform': 'rotate3d(1, 0, 0, ' + degrees + 'deg)'
      })
      break;
    // left
    case 37:
      degrees++;
      $('.world').css({
        'transform': 'rotate3d(0, 1, 0, ' + degrees + 'deg)'
      })
      break
    // right
    case 39:
      degrees--;
      $('.world').css({
        'transform': 'rotate3d(0, 1, 0, ' + degrees + 'deg)'
      })
      break;

    case 32:
      createElements(row1, -325);
      createElements(row2, -150);
      createElements(row3, 30);
      break;
  }
}

function createDirectories() {
  var container = [
    {
      name: 'HTML',
      type: 'dir',
    },
    {
      name: 'Javascript',
      type: 'dir',
      content: [
        {
          name: 'First Directory'
        }
      ]
    },
    {
      name: 'notas',
      type: 'file'
    }
  ];
  console.log(container);
  for (var i = 0; i < container.length; i++) {
    var cube = createCube(i, container[i]);
    $('.container').append(cube);
  }
}

function createCube(index, objCurrent) {
  var front = $('<div>', {
    class: 'front',
    id: index
  });

  var back = $('<div>', {
    class: 'back',
    id: index
  });

  var top = $('<div>', {
    class: 'top',
    id: index
  });

  var bottom = $('<div>', {
    class: 'bottom',
    id: index
  });

  var left = $('<div>', {
    class: 'left',
    id: index
  });

  var right = $('<div>', {
    class: 'right',
    id: index
  });

  var cube = $('<div>', {
    class: 'cube',
    id: index
  });

  cube.append(front);
  cube.append(back);
  cube.append(top);
  cube.append(bottom);
  cube.append(left);
  cube.append(right);
  return cube
}

function createElements(directories, position)
{
  for (var i = 0; i < directories.length; i++) {
    if (row1[i].status == "show") {
      this.createElement(i * 300, position,directories[i].type)
    }   
  }
}

function createElement(positionX, positionY, type)
{
  var world = document.getElementById('world')

  var elementDir = document.createElement("div")
  elementDir.setAttribute('class', 'element')

  var front = document.createElement("div")
  front.setAttribute('class', 'front')

  var back = document.createElement("div")
  back.setAttribute('class', 'back')

  var left = document.createElement("div")
  left.setAttribute('class', 'left')

  var right = document.createElement("div")
  right.setAttribute('class', 'right')

  var top = document.createElement("div")
  top.setAttribute('class', 'top')

  var bottom = document.createElement("div")
  bottom.setAttribute('class', 'bottom')

  elementDir.style.transform = "translateZ(" + positionY + "px) translateX(" + positionX + "px)"
  front.style.backgroundImage = "url('img/"+type+".png')";
  elementDir.appendChild(front)
  elementDir.appendChild(back)
  elementDir.appendChild(left)
  elementDir.appendChild(right)
  elementDir.appendChild(top)
  elementDir.appendChild(bottom)
  world.appendChild(elementDir)
}
