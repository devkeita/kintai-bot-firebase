const TYPES = {
    SlackSecret: Symbol.for("SlackSecret"),
    SlackToken: Symbol.for("SlackToken"),
    SlackChannelId: Symbol.for("SlackChannelId"),
    Container: Symbol.for("Container"),
    AcceptableLocale: Symbol.for("AcceptableLocale"),
    ExpressReceiver: Symbol.for("ExpressReceiver"),
    App: Symbol.for("App"),
    UsersFactory: Symbol.for("UsersFactory"),
    I18nFactory: Symbol.for("I18nFactory"),
    RequestFactory: Symbol.for("RequestFactory"),
    UserFactory: Symbol.for("UserFactory"),
    CommandResolver: Symbol.for("CommandResolver"),
    CommandDayTotal: Symbol.for("CommandDayTotal"),
    CommandSignIn: Symbol.for("CommandSignIn"),
    CommandSignOut: Symbol.for("CommandSignOut"),
    CommandNoRest: Symbol.for("CommandNoRest"),
    CommandRestHours: Symbol.for("CommandRestHours"),
    CommandChangeLocale: Symbol.for("CommandChangeLocale"),
    workedHoursCalculator: Symbol.for("workedHoursCalculator"),
    overtimeHoursCalculator: Symbol.for("overtimeHoursCalculator"),
    midnightHoursCalculator: Symbol.for("midnightHoursCalculator"),
    Calculator: Symbol.for("Calculator"),
}

export {TYPES};
