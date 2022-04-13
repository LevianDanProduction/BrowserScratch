
var rcmd = '';
class brow {
    getInfo () {
        return {
            // Core extensions only: override the default extension block colors.
            "id": 'dansbrowser',
            "name": 'Browser',
            "blocks": [
                {
                    "opcode": 'getUrl',
                    "blockType": "reporter",
                    "text": "get current URL"
                },
                {
                    "opcode": 'openUrl',
                    "blockType": "command",
                    "text": "open URL [URL]",
                    "arguments": {
                        "URL": {
                            "type": "string",
                            "defaultValue": 'https://adacraft.org'
                        }
                    }
                },
            ]
            "menus":{
            },
        };
    }

    getUrl () {
        return window.location.href;
    }

    openUrl ({URL}) {
        window.open(URL, '_blank')
    }
}
Scratch.extensions.register(new brow());