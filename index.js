const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

//const DOMPurify  = require('dompurify');

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNjZTU3NGU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48ZyBpZD0iQnJvd3NlciI+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAsMTguMjNIN2EuNzguNzgsMCwwLDEtLjc4LS43OFY3LjlBMS4xMywxLjEzLDAsMCwxLDcuMzMsNi43N0gxOS42N0ExLjEzLDEuMTMsMCwwLDEsMjAuNzksNy45djkuNTVBLjc4Ljc4LDAsMCwxLDIwLDE4LjIzWk03LjMzLDcuMjlhLjYuNiwwLDAsMC0uNi42MXY5LjU1YS4yNi4yNiwwLDAsMCwuMjYuMjZIMjBhLjI2LjI2LDAsMCwwLC4yNi0uMjZWNy45YS42LjYsMCwwLDAtLjYtLjYxWiIvPjxnIGlkPSJ0b3AiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTcuMzMsN0gxOS42N2EuODYuODYsMCwwLDEsLjg2Ljg2VjkuNjVhMCwwLDAsMCwxLDAsMEg2LjQ3YTAsMCwwLDAsMSwwLDBWNy45QS44Ni44NiwwLDAsMSw3LjMzLDdaIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==';
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOS42Niw2LjdINy4zM0ExLjEyLDEuMTIsMCwwLDAsNi4yMSw3LjgydjkuNTVhLjc4Ljc4LDAsMCwwLC43OC43OEgyMGEuNzguNzgsMCwwLDAsLjc3LS43OFY3LjgyQTEuMTIsMS4xMiwwLDAsMCwxOS42Niw2LjdaTTIwLDE3LjYzSDdhLjI1LjI1LDAsMCwxLS4yNi0uMjZWOS41N0gyMC4yN3Y3LjhBLjI2LjI2LDAsMCwxLDIwLDE3LjYzWiIvPjwvZz48L2c+PC9zdmc+';

class Scratch3AdaBrowserBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            // Core extensions only: override the default extension block colors.
            color1: '#FF8C1A',
            color2: '#DB6E00',
            id: 'dansbrowser',
            name: 'Browser',
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            docsURI: 'https://adacraft.notion.site/9c8fb3c7ed6240e181290b2f1c70a651',
            blocks: [
                {
                    opcode: 'getUrl',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get current URL')
                },
                {
                    opcode: 'openUrl',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('open URL'),
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://adacraft.org'
                        }
                    }
                },
            ]
        };
    }

    getUrl () {
        return window.location.href;
    }


    openUrl (args) {
        window.open(args.URL, '_blank')
    }
}