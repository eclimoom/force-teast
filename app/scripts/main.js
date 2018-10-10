
function relation(data, canvas) {
  var a = data.node, b = data.link, force, d = canvas, e, f = 'id', g = 12, h = 800, i = 600, charge = -50, k = 80, l = 2;
  this.init = function () {
    force = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(charge))
      .force('center', d3.forceCenter(h / 2, i / 2))
      .force('collide', d3.forceCollide(1.2 * g)),
      force.nodes(a).on('tick', this.render),
      force.force('link', d3.forceLink().links(b)
        .id(function (a) {
        return a[f]
      }).distance(k)),
      this.initDrag(),
      e = d.getContext('2d'),
      this.restart(),
      this.pause()
  }
    ,
    this.render = function () {
      e.clearRect(0, 0, h, i),
        e.lineWidth = l,
        e.strokeStyle = 'black',
        e.beginPath(),
        b.forEach(function (a) {
          e.moveTo(a.source.x, a.source.y),
            e.lineTo(a.target.x, a.target.y)
        }),
        e.stroke(),
        e.lineWidth = 1,
        e.strokeStyle = 'black',
        a.forEach(function (a) {
          e.fillStyle = '#A142FF',
            e.beginPath(),
            e.arc(a.x, a.y, a.radius, 0, 2 * Math.PI),
            e.fill(),
            e.stroke()
        }),
        e.font = '12px',
        e.fillStyle = 'black',
        e.textAlign = 'center',
        a.forEach(function (a) {
          e.fillText(a.name, a.x, a.y + 2.5 * a.radius)
        })
    }
    ,
    this.initDrag = function () {
      function a() {
        return force.find(d3.event.x, d3.event.y)
      }

      function b() {
        d3.event.active || force.alphaTarget(.3).restart(),
          d3.event.subject.fx = d3.event.subject.x,
          d3.event.subject.fy = d3.event.subject.y
      }

      function e() {
        d3.event.subject.fx = d3.event.x,
          d3.event.subject.fy = d3.event.y
      }

      function f() {
        d3.event.active || force.alphaTarget(0),
          d3.event.subject.fx = null,
          d3.event.subject.fy = null
      }

      d3.select(d).call(d3.drag().container(d).subject(a).on('start', b).on('drag', e).on('end', f))
    }
    ,
    this.pause = function () {
      force.stop()
    }
    ,
    this.run = function () {
      force.restart()
    }
    ,
    this.restart = function () {
      force.alpha(1),
        this.run()
    }
}




function initRadius(r) {
  r[0].radius = 18,
    r[1].radius = 14,
    r[2].radius = 14,
    r[3].radius = 14,
    r[4].radius = 14;
  for (var o = 5; o < r.length; o++)
    r[o].radius = 10
}

function initRelationShip() {

  var canvas = document.querySelector('canvas')
    , width = 1300
    , height = 600;
  var data = {node:[{'id':'0','name':'Geoff'},{'id':'1','name':'School'},{'id':'2','name':'Company'},{'id':'3','name':'Family'},
      {'id':'4','name':'Network'},{'id':'5','name':'Aaron'},{'id':'6','name':'Abbott'},{'id':'7','name':'Jacob'},{'id':'8','name':'James'},
      {'id':'9','name':'Kelvin'},{'id':'10','name':'Kendall'},{'id':'11','name':'Kendrickw'},{'id':'12','name':'Leroy'},{'id':'13','name':'Leslie'},
      {'id': '14', 'name': 'Lester'}, {'id': '15', 'name': 'Magnus'}, {'id': '16', 'name': 'Malcolm'}, {
        'id': '17',
        'name': 'Melvin'
      }, {'id': '18', 'name': 'Perry'},
      {'id': '19', 'name': 'Peter'}, {'id': '20', 'name': 'Peyton'}, {'id': '21', 'name': 'Royce'}, {
        'id': '22',
        'name': 'Rufus'
      }, {'id': '23', 'name': 'Rupert'}, {'id': '24', 'name': 'Hadden'}, {'id': '25', 'name': 'Hadley'}, {
        'id': '26',
        'name': 'Hadwin'
      }, {'id': '27', 'name': 'Hal'}, {'id': '28', 'name': 'Halbert'}, {'id': '29', 'name': 'Halden'}, {
        'id': '30',
        'name': 'Hale'
      }, {'id': '31', 'name': 'Gilroy'}, {'id': '32', 'name': 'Glenn'}, {'id': '33', 'name': 'Goddard'}, {
        'id': '34',
        'name': 'Godfrey'
      }, {'id': '35', 'name': 'Godwin'}, {'id': '36', 'name': 'Graham'}, {'id': '37', 'name': 'Grant'}, {
        'id': '38',
        'name': 'Tobias'
      }, {'id': '39', 'name': 'Toby'}, {'id': '40', 'name': 'Todd'}, {'id': '41', 'name': 'Tony'}, {
        'id': '42',
        'name': 'Travis'
      }, {'id': '43', 'name': 'Trent'}, {'id': '44', 'name': 'Trevor'}, {'id': '45', 'name': 'Tristan'}, {
        'id': '46',
        'name': 'Troy'
      }, {'id': '47', 'name': 'Truman'}, {'id': '48', 'name': 'Tyler'}, {'id': '49', 'name': 'Tyler49'}],
    link: [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {
      'source': 0,
      'target': 4
    }, {'source': 2, 'target': 5}, {'source': 3, 'target': 6}, {'source': 4, 'target': 7}, {
      'source': 1,
      'target': 8
    }, {'source': 2, 'target': 9}, {'source': 3, 'target': 10}, {'source': 4, 'target': 11}, {
      'source': 1,
      'target': 12
    }, {'source': 2, 'target': 13}, {'source': 3, 'target': 14}, {'source': 4, 'target': 15}, {
      'source': 1,
      'target': 16
    }, {'source': 2, 'target': 17}, {'source': 3, 'target': 18}, {'source': 4, 'target': 19}, {
      'source': 1,
      'target': 20
    }, {'source': 2, 'target': 21}, {'source': 3, 'target': 22}, {'source': 4, 'target': 23}, {
      'source': 1,
      'target': 24
    }, {'source': 2, 'target': 25}, {'source': 3, 'target': 26}, {'source': 4, 'target': 27}, {
      'source': 1,
      'target': 28
    }, {'source': 2, 'target': 29}, {'source': 3, 'target': 30}, {'source': 4, 'target': 31}, {
      'source': 1,
      'target': 32
    }, {'source': 2, 'target': 33}, {'source': 3, 'target': 34}, {'source': 4, 'target': 35}, {
      'source': 1,
      'target': 36
    }, {'source': 2, 'target': 37}, {'source': 3, 'target': 38}, {'source': 4, 'target': 39}, {
      'source': 1,
      'target': 40
    }, {'source': 2, 'target': 41}, {'source': 3, 'target': 42}, {'source': 4, 'target': 43}, {
      'source': 1,
      'target': 44
    }, {'source': 2, 'target': 45}, {'source': 3, 'target': 46}, {'source': 4, 'target': 47},
      {
      'source': 1,
      'target': 48
    }, {
        'source': 48,
        'target': 49
      }]
  };
    initRadius(data.node);
  var _relation = new relation(data, canvas);
    _relation.init(),
    _relation.run()
}
initRelationShip();

