var degrees = 0;

window.onkeydown = function (e) {
  var key = e.keyCode ? e.keyCode : e.which;
  console.log(key)
  switch (key) {
    case 32:
      generateMaze();
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

function generateMaze()
{
  var row1 = ['wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf', 'wf']
  for (var i = 0; i < row1.length; i++) {
    if (row1[i] == 'wf') {
      this.wf(i * 50, -375)
    }
    
  }
}

function wf(positionX, positionY)
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

  var botton = document.createElement("div")
  botton.setAttribute('class', 'back')

  elementDir.style.transform = "translateZ(" + positionY + "px) translateX(" + positionX + "px)"
  $(elementDir).hover(function () {
    $(this).css("transform", "scale(1)");
  });
  elementDir.appendChild(front)
  elementDir.appendChild(back)
  elementDir.appendChild(left)
  elementDir.appendChild(right)
  elementDir.appendChild(top)
  elementDir.appendChild(botton)
  world.appendChild(elementDir)
}
