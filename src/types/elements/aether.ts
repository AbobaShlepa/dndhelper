import type Effect from '../effect'

export default class Aether {
    name: string = 'Эфир';
    shortName: string = 'E';

    acceptRebis(): Effect {
        return {
            benifit: 'Восстанавливает здоровье, равное количеству уровней ячеек потраченных заклинаний',
            downside: 'Уменьшает ваш КД на 1d4 до вашего следующего хода'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Позволяет использовать два заклинания за ход',
            downside: 'Наносит 1d6 урона'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Добавляет сопротивление магии на 1d4 хода',
            downside: 'Уменьшает скорость на 10 фт'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Следующее заклинание на потратит ячейки',
            downside: 'Выпитое зелье считается за два'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Для следующего заклинания можно выбрать дополнительную цель / область',
            downside: 'Наносит 1d4 * (количество дополнительных целей / областей)'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Увеличивает эффект от следующего заклинания, как если бы была использована ячейка уровня выше на 1d4',
            downside: 'ВЫпитое зелье считается за два'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Увеличивает эффект вдвое',
            downside: 'Уменьшает ваш КД на 1d4 на 1d4 ходов'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Позволяет не поддерживать концентрацию на одном заклинании',
            downside: 'Любой ваш следующий бросок кидается с помехой'
        }
    }
}