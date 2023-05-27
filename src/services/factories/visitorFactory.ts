import type Effect from "../../types/effect";
import Aether from "../../types/elements/aether";
import Caelum from "../../types/elements/caelum";
import type { Element } from "../../types/elements/element";
import Hydragenum from "../../types/elements/hydragenum";
import Quebrith from "../../types/elements/quebrith";
import Rebis from "../../types/elements/rebis";
import Solon from "../../types/elements/solon";
import Vermilion from "../../types/elements/vermilion";
import Vitriol from "../../types/elements/vitriol";

export function GetAcceptMethod(element: Element, nextElement: Element) : () => Effect
{
    if (nextElement instanceof Rebis)
    {
        return element.acceptRebis;
    }

    if (nextElement instanceof Hydragenum)
    {
        return element.acceptHydragenum;
    }

    if (nextElement instanceof Vitriol)
    {
        return element.acceptVitriol;
    }

    if (nextElement instanceof Caelum)
    {
        return element.acceptCaelum;
    }

    if (nextElement instanceof Quebrith)
    {
        return element.acceptQuebrith;
    }

    if (nextElement instanceof Vermilion)
    {
        return element.acceptVermilion;
    }

    if (nextElement instanceof Aether)
    {
        return element.acceptAether;
    }

    if (nextElement instanceof Solon)
    {
        return element.acceptSolon;
    }

    throw Error;
}