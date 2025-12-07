namespace game {
    //% block="default ask theme"
    //% blockId=cq_default_prompt_theme
    //% group="Prompt"
    //% weight=8
    export function defaultTheme(): game.PromptTheme {
        return {
            colorPrompt: 1,
            colorInput: 3,
            colorInputHighlighted: 5,
            colorInputText: 1,
            colorAlphabet: 1,
            colorCursor: 7,
            colorBackground: 15,
            colorBottomBackground: 3,
            colorBottomText: 1
        }
    }

    /**
     * Ask the player for a string value.
     * @param message The message to display on the text-entry screen
     * @param theme The theme defines the colors of each element on the screen
     * @param answerLength The maximum number of characters the user can enter (1 - 24)
     * @param useOnScreenKeyboard Force the simulator to use the on-screen keyboard for text entry
     */
    //% weight=9 help=game/ask-for-string
    //% blockId=cq_game_ask_for_string
    //% block="ask for string $message theme $theme and max length $answerLength use on-screen keyboard $useOnScreenKeyboard"
    //% message.shadow=text
    //% message.defl=""
    //% theme.shadow=cq_default_prompt_theme
    //% answerLength.defl="12"
    //% answerLength.min=1
    //% answerLength.max=24
    //% group="Prompt"
    export function askForString_block(message: any, theme: game.PromptTheme, answerLength = 12, useOnScreenKeyboard = false) {
        let p = new game.Prompt(theme);
        const result = p.show(console.inspect(message), answerLength, useOnScreenKeyboard);
        return result;
    }

    /**
     * Ask the player for a number value.
     * @param message The message to display on the text-entry screen
     * @param answerLength The maximum number of digits the user can enter (1 - 10)
     * @param useOnScreenKeyboard Force the simulator to use the on-screen keyboard for text entry
     */
    //% weight=9 help=game/ask-for-number
    //% blockId=cq_game_ask_for_number
    //% block="ask for number $message theme $theme and max length $answerLength use on-screen keyboard $useOnScreenKeyboard"
    //% message.shadow=text
    //% message.defl=""
    //% theme.shadow=cq_default_prompt_theme
    //% answerLength.defl="6"
    //% answerLength.min=1
    //% answerLength.max=10
    //% group="Prompt"
    export function askForNumber_block(message: any, theme: game.PromptTheme, answerLength = 6, useOnScreenKeyboard = false) {
        answerLength = Math.max(0, Math.min(10, answerLength));
        let p = new game.NumberPrompt(theme);
        const result = p.show(console.inspect(message), answerLength, useOnScreenKeyboard);
        return parseFloat(result);
    }

    //% block="create ask theme with colors | prompt text $colorPrompt dashed input line $colorInput next input highlight $colorInputHighlighted input text $colorInputText alphabet $colorAlphabet cursor $colorCursor background $colorBackground bottom background $colorBottomBackground bottom text $colorBottomText"
    //% blockId=cq_create_theme
    //% colorPrompt.shadow=colorindexpicker
    //% colorInput.shadow=colorindexpicker
    //% colorInputHighlighted.shadow=colorindexpicker
    //% colorInputText.shadow=colorindexpicker
    //% colorAlphabet.shadow=colorindexpicker
    //% colorCursor.shadow=colorindexpicker
    //% colorBackground.shadow=colorindexpicker
    //% colorBottomBackground.shadow=colorindexpicker
    //% colorBottomText.shadow=colorindexpicker
    //% group="Prompt"
    //% weight=7
    export function createTheme(colorPrompt: number = 1, colorInput: number = 3, colorInputHighlighted: number = 5, colorInputText: number = 1, colorAlphabet: number = 1, colorCursor: number = 7, colorBackground: number = 15, colorBottomBackground: number = 3, colorBottomText: number = 1): game.PromptTheme {
        return {
            colorPrompt: colorPrompt,
            colorInput: colorInput,
            colorInputHighlighted: colorInputHighlighted,
            colorInputText: colorInputText,
            colorAlphabet: colorAlphabet,
            colorCursor: colorCursor,
            colorBackground: colorBackground,
            colorBottomBackground: colorBottomBackground,
            colorBottomText: colorBottomText,
        }
    }

    
}