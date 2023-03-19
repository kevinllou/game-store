import IGames from "../interfaces/IGames";

export const getGamesArray = (games: Array<IGames> | undefined, isFiltered: boolean): IGames[] | null => {
    if (isFiltered) {
        return games?.filter(({ rating }) => rating > 4.5) || [];
    }
    return games || [];
}