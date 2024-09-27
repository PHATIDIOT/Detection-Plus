class DetectionPlus {
    constructor() {
        this.keyPressed = false;
        this.mouseClicked = false;

        // Detect key press
        document.addEventListener('keydown', (event) => {
            this.keyPressed = true;
        });

        document.addEventListener('keyup', (event) => {
            this.keyPressed = false;
        });

        // Detect mouse click
        document.addEventListener('mousedown', () => {
            this.mouseClicked = true;
        });

        document.addEventListener('mouseup', () => {
            this.mouseClicked = false;
        });
    }

    getInfo() {
        return {
            id: 'detectplus',
            name: 'Detections Plus',
            blocks: [
                {
                    opcode: 'isKeyPressed',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'key pressed?'
                },
                {
                    opcode: 'isMouseClicked',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'mouse clicked?'
                },
                {
                    opcode: 'isMouseAt',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'mouse at x [X] y [Y]?',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                }
            ]
        };
    }

    isKeyPressed() {
        return this.keyPressed;
    }

    isMouseClicked() {
        return this.mouseClicked;
    }

    isMouseAt(args) {
        const mouseX = window.mouseX || 0;
        const mouseY = window.mouseY || 0;
        return (Math.abs(mouseX - args.X) < 10 && Math.abs(mouseY - args.Y) < 10);
    }
}

Scratch.extensions.register(new DetectionPlus());
