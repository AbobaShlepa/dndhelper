import type Effect from '../effect'

export default class Quebrith {
    name: string = 'Квебрит';
    shortName: string = 'K';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Вызывает отравление, наносящее 1d4 урона холодом на 1d4 хода (стакается)',
            downside: 'Исцеление не действует на протяжении 1d4 ходов'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Вызывает обморожениеб наносящее 1d4 урона холодом на 2d4 хода (не стакается)',
            downside: 'Уменьшает скорость на 1d4 * 10 фт до следующего хода'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Добавляет сопротивление огню на 1d4 хода',
            downside: 'Другой элементальный урон по вам увеличивается вдвое на 1d4 ходов'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Увеличивает вашу инициативу на 1d6 на время текущей битвы',
            downside: 'Уменьшает КД на 1d4 на 1d4 ходов'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Любой ваш следующий бросок кидается с преимуществом',
            downside: 'Наносит 2d4 урона'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Позволяет уклониться от критического урона по вам, вы получаете обычный урон',
            downside: 'Уменьшает скорость на 10 фт на 1d4 ходов'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Следующее используемое вами заклинание наносит дополнительно 1d4 урона',
            downside: 'Любой ваш следующий бросок кидается с помехой'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Вызывает кровотечение, наносящее 1d4 урона на 1d4 хода (стакается)',
            downside: 'Наносит 1d4 урона'
        }
    }
}