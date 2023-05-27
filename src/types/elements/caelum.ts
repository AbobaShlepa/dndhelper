import type Effect from '../effect'

export default class Caelum {
    name: string = 'Аэр';
    shortName: string = 'A';
    
    acceptRebis(): Effect {
        return {
            benifit: 'Снимает похмелье',
            downside: 'До длительного отдыха броски умений и навыков бросаются с помехой'
        }
    }

    acceptHydragenum(): Effect {
        return {
            benifit: 'Эффект дополнительно работает в радиусе 15фт',
            downside: 'Наносит 1d4 урона холодом'
        }
    }

    acceptVitriol(): Effect {
        return {
            benifit: 'Добавляет сопротивление электричеству на 1d4 хода',
            downside: 'Другой элементальный урон по вам увеличиваетсыя вдвое на 1d4 ходов'
        }
    }

    acceptCaelum(): Effect {
        return {
            benifit: 'Увеличивает скорость на 10 фт',
            downside: 'Наносит 1d4 урона электричеством'
        }
    }

    acceptQuebrith(): Effect {
        return {
            benifit: 'Целевая граница критического урона для следующей атаки снижена на 1d4',
            downside: 'Уменьшает ваш КД на 1d4до следующего вашего хода'
        }
    }

    acceptVermilion(): Effect {
        return {
            benifit: 'Усиливает классовую способность на 1d4 до конца боя',
            downside: 'Наносит 1d4 урона 1d4 ходов'
        }
    }

    acceptAether(): Effect {
        return {
            benifit: 'Позволяет видеть невидимое в течении 1d4 минут',
            downside: 'Наносит 1d4 урона магией'
        }
    }

    acceptSolon(): Effect {
        return {
            benifit: 'Позволяет перемещаться дополнительный раз за ход на два хода',
            downside: 'Наносимый вами урон уменьшен на 1d4 на 1d4 хода'
        }
    }
}