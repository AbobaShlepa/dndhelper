import type Effect from '../effect'

export default class Vitriol {
    name: string = 'Купорос';
    shortName: string = 'V';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Бомба не наносит урон',
            downside: 'Уменьшает кд на 1d4 на 1d4 ходов'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Будучи в воде / под водой вы получаете 2d4 КД на 1 час',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1 час'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Повышает КД на 1d4 на 1d4 хода',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1d4 ходов'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Атаки с воздуха по вам бросаются с помехой до конца боя',
            downside: 'Уменьшает скорость на 10фт до конца боя'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Позволяет отразить физическую атаку, получая половину физического урона, если выбросить на 1d20 значение большее, чем попадание по вам, на 1d4 хода',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1d4 ходов'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Находясь при смерти, засчитайте провал броска смерти, но восстановитесь с 1d4 здоровья',
            downside: 'Выпитое зелье считается за два'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Создает иллюзию вас, которая примет следующую атаку, если противник не выбросит Nat20',
            downside: 'Наносит 2d4 урона'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Наносимый по вам урон уменьшается на 1d4 на 1d4 хода',
            downside: 'Уменьшает скорость на 10фт на 1d4 ходов'
        }
    }
}