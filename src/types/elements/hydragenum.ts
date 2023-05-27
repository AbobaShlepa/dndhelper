import type Effect from '../effect'

export default class Hydragenum {
    name: string = 'Гидроген';
    shortName: string = 'H';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Позволяет, находясь в воде, восстанавливать 1d4 здоровья за 15 минут (работает 15 минут)',
            downside: 'Уменьшает КД на 1d4 на 1d4 ходов'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Увеличивает скорость в воде на 100 фт до 1 часа',
            downside: 'Уменьшает урон на 1d4 до 1 часа'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Добавляет сопротивление холоду на 1d4 хода',
            downside: 'Уменьшает скорость перемещения на 10 фт на 1d4 хода'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Позволяет обходиться без кислорода в течении 15 минут',
            downside: 'Наносит 1d4 урона'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Позволяет один раз за раунд атаковать в ход одного любого противника на 1d4 ходов',
            downside: 'Выпитое зелье считается за два'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Увеличивает кубик эффекта на 1 выше по уровню (1d6, 1d8 и т.д.)',
            downside: 'Наносит 1d4 урона на 1d4 ходов'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Восстанавливает 1 ячейку заклинания 1d4 уровня',
            downside: 'Наносит 1d4 урона'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Обморожение восстанавливает вам здоровье вместо урона на 1d4 хода',
            downside: 'Уменьшает скорость перемещение на 10 фт на 1d4 хода'
        }
    }
}