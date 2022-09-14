import React from 'react'
import BannerVideo from '../components/BannerVideo'
import ThreeColumns from '../components/ThreeColumns'
import TwoColumns from '../components/TwoColumns'
import Card from '../components/Card'
import Meta from '../components/Meta'
import _main1_webp from '../assets/_main1.webp'
import _main2_webp from '../assets/_main2.webp'
import _main3_webp from '../assets/_main3.webp'
import _main1 from '../assets/_main1.jpg'
import _main2 from '../assets/_main2.jpg'
import _main3 from '../assets/_main3.jpg'
import TwoColumnsImage from '../components/TwoColumnsImage'
import _main_items from '../assets/_main-items.jpg'
import _main_parts from '../assets/_main-parts.jpg'
import _main_styles from '../assets/_main-styles.jpg'
import _main_items_webp from '../assets/_main-items.webp'
import _main_parts_webp from '../assets/_main-parts.webp'
import _main_styles_webp from '../assets/_main-styles.webp'

function MainPage(props) {
	return (
		<div className="MainPage -mt-16">
			<BannerVideo/>
			<div className="mx-auto">
				<ThreeColumns
					columns={[
						<Card image={_main1} webp={_main1_webp}>롱보드는 아주 재밌습니다.</Card>,
						<Card image={_main2} webp={_main2_webp}>롱보드를 타면 아주 신납니다.</Card>,
						<Card image={_main3} webp={_main3_webp}>롱보드는 굉장히 재밌습니다.</Card>
					]}
				/>
				<TwoColumns
					bgColor={'#f4f4f4'}
					columns={[
						<TwoColumnsImage image={_main_items} webp={_main_items_webp} />,
						<Meta
							title={'Items'}
							content={'롱보드는 기본적으로 데크가 크기 때문에 입맛에 따라 정말 여러가지로 변형된 형태가 나올수 있습니다. 실제로 데크마다 가지는 모양, 재질, 무게는 천차만별인데, 본인의 라이딩 스타일에 맞춰 롱보드를 구매하시는게 좋습니다.'}
							btnLink={'/items'}
						/>
					]}
				/>
				<TwoColumns
					bgColor={'#fafafa'}
					columns={[
						<Meta
							title={'Parts of Longboard'}
							content={'롱보드는 데크, 트럭, 휠, 킹핀, 베어링 등 여러 부품들로 구성됩니다. 롱보드를 타다보면 조금씩 고장나는 부품이 있기 마련인데, 이럴때를 위해 롱보들의 부품들에 대해서 알고 있으면 큰 도움이 됩니다.'}
							btnLink={'/part'}
						/>,
						<TwoColumnsImage image={_main_parts} webp={_main_parts_webp} />
					]}
					mobileReverse={true}
				/>
				<TwoColumns
					bgColor={'#f4f4f4'}
					columns={[
						<TwoColumnsImage image={_main_styles} webp={_main_styles_webp} />,
						<Meta
							title={'Riding Styles'}
							content={'롱보드 라이딩 스타일에는 크게 프리스타일, 다운힐, 프리라이딩, 댄싱이 있습니다. 보통 롱보드는 라이딩 스타일에 따라 데크의 모양이 조금씩 달라집니다. 많은 롱보드 매니아들이 각 쓰임새에 맞는 보드들을 소유하고 있습니다.'}
							btnLink={'/riding-styles'}
						/>
					]}
				/>
			</div>
		</div>
	)
}

export default MainPage
