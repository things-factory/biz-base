export * from './entities'
export * from './graphql'

process.on('bootstrap-module-register-context' as any, function(app, contextList) {
  contextList.push(async function({ ctx }) {
    ctx.bizplace = {
      id: 'kimeda',
      name: 'Kimeda',
      __type: 'bizplace'
    }

    return ctx
  })
})
