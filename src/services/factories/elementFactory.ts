import Aether from "../../types/elements/aether";
import Caelum from "../../types/elements/caelum";
import type { Element } from "../../types/elements/element";
import Hydragenum from "../../types/elements/hydragenum";
import Quebrith from "../../types/elements/quebrith";
import Rebis from "../../types/elements/rebis";
import Solon from "../../types/elements/solon";
import Vermilion from "../../types/elements/vermilion";
import Vitriol from "../../types/elements/vitriol";

export function Parse(input: string): Element[]
{
    const result: Element[] = [];
    for (let i = 0; i < input.length; i++)
    {
        result.push(GetExactElement(input[i]));
    }

    return result;
}

function GetExactElement(value: string) : Element
{
    if (value === 'R')
    {
        return new Rebis();
    }
    
    if (value === 'H')
    {
        return new Hydragenum();
    }

    if (value === 'V')
    {
        return new Vitriol();
    }

    if (value === 'A')
    {
        return new Caelum();
    }

    if (value === 'K')
    {
        return new Quebrith();
    }

    if (value === 'C')
    {
        return new Vermilion();
    }

    if (value === 'E')
    {
        return new Aether();
    }

    if (value === 'S')
    {
        return new Solon();
    }

    throw Error;
}