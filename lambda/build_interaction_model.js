const { ControlInteractionModelGenerator, Logger } = require('ask-sdk-controls');

const log = new Logger('HelloWorld:InteractionModel');

new ControlInteractionModelGenerator()
    .withInvocationName('hello controls')
    .addIntent({ name: 'AMAZON.StopIntent' })
    .addIntent({ name: 'AMAZON.NavigateHomeIntent' })
    .addIntent({ name: 'AMAZON.HelpIntent' })
    .addIntent({ name: 'AMAZON.CancelIntent' })

    // Add a custom intent
    .addIntent({ name: 'HelloIntent', samples: [
        "Say hello",
        "Say hi"
    ]})

    // Build and write
    .buildAndWrite('en-US-generated.json');

log.info('Wrote ./en-US-generated.json');