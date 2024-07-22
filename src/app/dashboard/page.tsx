import MyCreditsComponent from '../view/components/dashboard/MyCredits'
import RequestComponent from '../view/components/dashboard/Request'
import ArtStatusComponent from '../view/components/dashboard/ArtStatus'
import AllArtsComponent from '../view/components/dashboard/AllArts'
import DownloadsComponent from '../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../view/components/dashboard/UpgradePlan'
import SideDrawer from '../view/components/SideDrawer'

export default function Dashboard() {
    return (
        <div className='flex h-[100vh], w-[100vw]'>
            <div>
                <SideDrawer />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 h-[100vh] min-w-[100vw]">
                <div className='flex gap-3'>
                    <MyCreditsComponent credits={10} />
                    <RequestComponent />
                </div>
                <div className='flex gap-4'>
                    <ArtStatusComponent status={'em andamento'} />
                    <ArtStatusComponent status={'concluido'} />
                    <ArtStatusComponent status={'em andamento'} />
                </div>
                <div className='flex gap-4'>
                    <AllArtsComponent />
                    <DownloadsComponent />
                    <UpgradePlanComponent />
                </div>
            </div>
        </div>

    )
}