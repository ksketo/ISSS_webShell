var main = new Terminator(document.getElementById('contentWrapper'),
  {
    prefix: '<span class="green">kostas</span><span class="red">@</span><span class="yellow">Web</span>:<span class="red">~$</span> ',
    alwaysFocus: true,
    autoScroll: (window.innerWidth >= 600)
  })

window.onresize = function () {
  console.log('Resizing!')
  if (window.innerWidth >= 600) {
    main.config.autoScroll = true
  } else {
    main.config.autoScroll = false
  }
}

function printClass (term, className) {
  var cloneTarget = null
  if (className && (cloneTarget = document.getElementsByClassName(className))) {
    if (cloneTarget[0]) {
      term.writeHTML(cloneTarget[0].innerHTML)
    } else {
      term.writeLine('cat: ' + className + ': No such file or directory')
    }
  }
}

main.register(function (term, command) {
  term.writeLine('welcome.txt')
  term.writeLine('contact.txt')
  term.writeLine('help.txt')
  term.writeLine('git.txt')
  term.prompt()
}, 'ls')

main.register(function (term, command) {
  command = command.split(' ')
  var arg = command[1] || ''
  if (arg.indexOf('.txt') !== -1 && arg.indexOf('.txt') === (arg.length - 4)) {
    arg = arg.substring(0, arg.indexOf('.txt'))
  }

  printClass(term, arg)
  term.prompt()
}, 'cat')

main.register(function (term, command) {
  printClass(term, 'contact')
  term.prompt()
}, 'contact')

main.register(function (term, command) {
  printClass(term, 'help')
  term.prompt()
}, ['help', 'man'])

main.register(function (term, command) {
  printClass(term, 'git')
  term.prompt()
}, 'git')

main.register(function (term, command) {
  term.writeLine('Redirecting to Github...')
  setTimeout(function () {
    window.open(
      'https://github.com/ksketo',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['gh', 'github'])

main.register(function (term, command) {
  term.writeLine('Redirecting to StackOverflow...')
  setTimeout(function () {
    window.open(
      'https://stackoverflow.com/users/4619005/kostas',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['so', 'stackoverflow'])

main.register(function (term, command) {
  term.writeLine('Redirecting to Linkedin...')
  setTimeout(function () {
    window.open(
      'https://www.linkedin.com/in/konstantinos-faliagkas-6241022a/',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['linkedin'])

main.register(function (term, command) {
  term.writeLine('Redirecting to Twitter...')
  setTimeout(function () {
    window.open(
      'https://twitter.com/kwst_f',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['twitter'])

main.register(function (term, command) {
  term.writeLine('Redirecting to Steem...')
  setTimeout(function () {
    window.open(
      'https://steemit.com/@kostas',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['steem'])

main.register(function (term, command) {
  term.writeLine('Redirecting to AngelList...')
  setTimeout(function () {
    window.open(
      'https://angel.co/konstantinos-faliagkas',
      '_blank'
    )
    term.prompt()
  }, 750)
}, ['angellist'])

main.register(function (term, command) {
  term.writeLine('/home/kostas')
  term.prompt()
}, 'pwd')

main.register(function (term, command) {
  term.element.innerHTML = ''
  term.prompt()
}, 'clear')

main.register(function (term, command) {
  term.writeLine('This user is not in the cders file. This incident has been reported.')
  term.prompt()
}, 'cd')

main.register(function (term, command) {
  term.writeLine('guest')
  term.prompt()
}, 'whoami')

main.register(function (term, command) {
  term.writeLine(command.split(' ').slice(1).join(' '))
  term.prompt()
}, 'echo')

main.register(function (term, command) {
  var contentWrapper = document.getElementById('contentWrapper')
  contentWrapper.classList.toggle('hacker')
  term.writeLine('Hacker mode: ' + (contentWrapper.classList.contains('hacker') ? 'ENABLED' : 'DISABLED'))
  term.prompt()
}, ['hack', 'hacker'])

main.prompt()
main.autoType('cat welcome.txt', 1000)
