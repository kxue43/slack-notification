import * as core from '@actions/core';
import fetch from "node-fetch";

async function main() {
  try {
    const webhook = core.getInput('WEBHOOK', { required: true });
    const message = core.getInput('MESSAGE', { required: true });
    await fetch(
      webhook,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'text': message })
      }
    );
  }
  catch (err) {
    core.setFailed(`Action failed with error: ${err}`);
  }
}


main();
