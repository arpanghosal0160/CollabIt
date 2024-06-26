"use client"

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favourites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = [];

    if(!data?.length && query.search) {
        return(
            <div>
                Try searching for something else
            </div>
        )
    }
    if(!data?.length && query.favourites) {
        return(
            <div>
                No favourites
            </div>
        );
    }
    if(!data?.length){
        return(
            <div>
                No boards found
            </div>
        )
    }
    return(
        <div>
            {JSON.stringify(query)}
        </div>
    )
}