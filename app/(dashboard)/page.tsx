
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
    searchParams: {
        search?:string;
        favourites?:string;
    }
}

const DashboardPage = ({
    searchParams,
}: DashboardPageProps) => {
    
    return (
        <div className=" flex-1 h-[calc(100%-80px)] p-6 ">
            
            {!useOrganization ? (
                <EmptyOrg />
            ) : (
                <BoardList
                    
                    query={searchParams} orgId={""}                
                />
            )}
            
        </div>
    );
};

export default DashboardPage;