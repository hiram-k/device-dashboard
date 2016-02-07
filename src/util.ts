let identifier = 0;
export function generateID()
{
    identifier++;
    return Symbol(`${identifier}`);
}
