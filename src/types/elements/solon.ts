import type Effect from '../effect'

export default class Solon {
    name: string = 'Солон';
    shortName: string = 'S';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Даёт временное здоровье равное максимальному значению вашей кости здоровья',
            downside: 'Уменьшает ваш КД на 1d4 на 1d4 - 1 ходов'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Добавляет урон холодом равный уровню вашего максимального класса, на 1d4 ходов',
            downside: 'Наносит 1d4 урона'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Добавляет сопротивление физ урона на 1d4 ходов',
            downside: 'Наносит 1d4 урона холодом'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Позволяет совершить дополнительную физическую атаку, если на 1d20 выбросить больше 14',
            downside: 'Уменьшает скорость перемещения на 10 фт'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Увеличивает урон от кулаков на 1d6 на 1d4 хода',
            downside: 'Уменьшает ваш КД на 1d4 на 1d4 ходов'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Враги получают шестую часть физ урона (не менее 1), которую наносят вам в течении 1d4 ходов',
            downside: 'Уменьшает ваш КД на 1d4 на 1d4 ходов'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Увелчивает эффект зелий на 1d4',
            downside: 'Наносит 1d4 урона'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Короткий отдых уменьшен вдвое',
            downside: 'Наносимый вами урон уменьшен на 1d4 до конца след боя'
        }
    }
}