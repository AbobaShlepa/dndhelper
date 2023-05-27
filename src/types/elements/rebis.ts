import type Effect from '../effect'

export default class Rebis {
    name: string = 'Ребис';
    shortName: string = 'R';

    acceptRebis(): Effect {
        return {
            benifit: 'Восстанавливает 1d4 здоровья на 1d4 ходов',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1d4 ходов'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Позволяет выпить 2 таких зелья как одно',
            downside: 'Уменьшает скорость перемещение на 10фт на время фитвы'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Даёт сопротивление кислоте на 1d4 хода',
            downside: 'Наносит 1d4 урона'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Добавляет 1d8 временных пунктов здоровья',
            downside: 'Уменьшает КД на 1d4 на 1d4 ходов'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Даёт 1d4 временных пунктов здоровья за каждый успешный удар (во время 1d4 ходов)',
            downside: 'Уменьшает скорость перемещения на 10 фт на 1d4 ходов'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Исцеляет от немагических болезней, отравлений',
            downside: 'Уменьшает КД на 1d4 до следующего длительного отдыха'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Следующее использование заклинаний восстанавливает вам 3 * (уровень ячейки) здоровья',
            downside: 'Уменьшает КД на 1d4 на 1d4 ходов'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Останавливает кровотечение',
            downside: 'Наносит 1d4 урона'
        }
    }
}