import type Effect from '../effect'

export default class Vermilion {
    name: string = 'Киноварь';
    shortName: string = 'C';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон кислотой (+25%)',
            downside: 'Наносимый физический урон уменьшен на 1d6'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон холодом (+25%)',
            downside: 'Уменьшает скорость на 10 фт на 1d4 ходов'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Даёт сопротивление некторическому урону на 1d4 хода',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1d4 ходов'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон электричеством (+25%)',
            downside: 'Любой ваш следующий бросок кидается с помехой'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон огнём (+25%)',
            downside: 'Уменьшает ваш КД на 1d4 до вашего следующего хода'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон некротикой (+25%)',
            downside: 'Огненный урона по вам увеличивается вдвое до вашего следующего хода'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Эффект наносит доп. урон магией (+25%)',
            downside: 'Физический урон по вам увеличивается вдвое до вашего следующего хода'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Эффект наносит доп. физический урон (+25%)',
            downside: 'Наносит 1d8 урона'
        }
    }
}