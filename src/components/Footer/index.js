import React from "react";

const Footer = () => {
	const popUpp = async (popId) => {
		let popT = document.getElementById(popId);
		let popW = document.getElementById('root');
		popT.classList.add('pop-go');
		popW.classList.add('pop-overr');
	};
	const popClose = async (popId) => {
		let popT = document.getElementById(popId);
		let popW = document.getElementById('root');
		popT.classList.remove('pop-go');
		popW.classList.remove('pop-overr');
	};	
  return (
<div>    
<div class="ft-wr d-flex justify-content-center align-items-center">
<div class="ft-inn">
	<div class="ft-inn-1">
		<div class="ft-inn-1-1" data-go="pop_1" onClick={() => popUpp('pop_1')}>faq</div>	
		<div class="ft-inn-1-1" data-go="pop_2" onClick={() => popUpp('pop_2')}>how to play</div>	
		<div class="ft-inn-1-1" data-go="pop_3" onClick={() => popUpp('pop_3')}>flip responsibly</div>	
	</div>
	<div class="ft-inn-2">
		rockpaperscissors	
	</div>
	<div class="ft-inn-3">
		Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.	
	</div>
	<div class="ft-inn-4">
<a class="ft-inn-1-1" aria-current="page" href="/">
<svg width="16" height="28" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.6014 13.6508V7.42451H6.69049L7.00391 4.99728H4.6014V3.44784C4.6014 2.74532 4.79569 2.26656 5.80424 2.26656L7.08847 2.26603V0.0950303C6.86638 0.0661693 6.10403 0 5.21673 0C3.3639 0 2.09542 1.13095 2.09542 3.20745V4.99728H0V7.42451H2.09542V13.6508H4.6014Z" fill="#02CD94"/>
</svg>
</a>
<a class="ft-inn-1-1 pd-27" aria-current="page" href="/">
<svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.86969 0.49707C0.739163 0.49707 0 1.23943 0 2.21517C0 3.16935 0.717144 3.93288 1.82631 3.93288H1.84777C3.00041 3.93288 3.71774 3.16935 3.71774 2.21517C3.69619 1.23943 3.00041 0.49707 1.86969 0.49707Z" fill="#02CD94"/>
<path d="M0.195312 5.29004H3.50033V15.2333H0.195312V5.29004Z" fill="#02CD94"/>
<path d="M11.6137 5.05762C9.83074 5.05762 8.63519 6.73299 8.63519 6.73299V5.29099H5.33008V15.2343H8.635V9.68155C8.635 9.38429 8.65655 9.08749 8.74387 8.87492C8.9828 8.28133 9.52651 7.66638 10.4396 7.66638C11.6355 7.66638 12.1138 8.57822 12.1138 9.91492V15.2343H15.4185V9.53297C15.4185 6.47882 13.788 5.05762 11.6137 5.05762Z" fill="#02CD94"/>
</svg>
</a>
<a class="ft-inn-1-1 pd-33" aria-current="page" href="/">
<svg width="27" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6386 1.60043C16.0199 1.87184 15.3606 2.05175 14.6732 2.1391C15.3803 1.7169 15.92 1.05343 16.1738 0.253739C15.5145 0.646826 14.7865 0.924483 14.0107 1.07943C13.3847 0.412846 12.4925 0 11.5191 0C9.63063 0 8.11028 1.53283 8.11028 3.41195C8.11028 3.68233 8.13316 3.94231 8.18931 4.18981C5.35347 4.0515 2.84416 2.69233 1.15846 0.621868C0.864168 1.13247 0.691542 1.7169 0.691542 2.34604C0.691542 3.52738 1.29989 4.57458 2.2067 5.18085C1.65866 5.17045 1.12103 5.01134 0.665544 4.76072C0.665544 4.77112 0.665544 4.78464 0.665544 4.79816C0.665544 6.45578 1.84793 7.83262 3.39844 8.1498C3.12078 8.22571 2.81816 8.26211 2.50411 8.26211C2.28573 8.26211 2.06527 8.24963 1.85832 8.20387C2.30029 9.55472 3.55442 10.5478 5.04566 10.5801C3.88511 11.4879 2.41156 12.0349 0.816332 12.0349C0.536595 12.0349 0.268298 12.0224 0 11.9881C1.51099 12.9625 3.30172 13.5189 5.23284 13.5189C11.5098 13.5189 14.9415 8.3193 14.9415 3.81232C14.9415 3.66153 14.9363 3.51595 14.929 3.3714C15.606 2.89096 16.1748 2.29093 16.6386 1.60043Z" fill="#02CD94"/>
</svg>
</a>
<a class="ft-inn-1-1" aria-current="page" href="/">
<svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3632 2.42578C10.1877 2.42578 10.0449 2.56859 10.0449 2.74406C10.0449 2.91954 10.1877 3.06234 10.3632 3.06234C10.5387 3.06234 10.6815 2.91957 10.6815 2.74406C10.6815 2.56856 10.5387 2.42578 10.3632 2.42578Z" fill="#02CD94"/>
<path d="M6.55409 3.73438C4.99822 3.73438 3.73242 5.00018 3.73242 6.55605C3.73242 8.11191 4.99822 9.37774 6.55409 9.37774C8.10998 9.37774 9.37579 8.11194 9.37579 6.55607C9.37579 5.0002 8.10998 3.73438 6.55409 3.73438Z" fill="#02CD94"/>
<path d="M9.51626 0H3.59397C1.61225 0 0 1.61225 0 3.594V9.51626C0 11.498 1.61225 13.1102 3.59397 13.1102H9.51626C11.498 13.1102 13.1102 11.498 13.1102 9.51626V3.594C13.1102 1.61225 11.498 0 9.51626 0ZM6.55512 10.151C4.57232 10.151 2.95925 8.53791 2.95925 6.55512C2.95925 4.57232 4.57235 2.95928 6.55512 2.95928C8.53788 2.95928 10.151 4.57235 10.151 6.55512C10.151 8.53788 8.53788 10.151 6.55512 10.151ZM10.3661 3.83669C9.76367 3.83669 9.27357 3.34659 9.27357 2.74419C9.27357 2.14178 9.76367 1.65166 10.3661 1.65166C10.9685 1.65166 11.4586 2.14176 11.4586 2.74416C11.4586 3.34657 10.9685 3.83669 10.3661 3.83669Z" fill="#02CD94"/>
</svg>
</a>
	</div>
</div>
</div>
<div class="ft-wr-2 d-flex justify-content-center align-items-center">
<div class="ft-inn">
<div class="ft-copy">
©2023 all rights reserved RockPaperScissors
</div>
</div>
</div>
<div class="pop-tt-wr"  id="pop_1">
<div class="pop-tt-inn">
	<div class="pop-close" onClick={() => popClose('pop_1')}>
<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="22.8219" y1="0.347903" x2="1.24961" y2="22.6155" stroke="black"/>
<line y1="-0.5" x2="31.0034" y2="-0.5" transform="matrix(0.695805 0.71823 0.71823 -0.695805 0.890503 0)" stroke="black"/>
</svg>	
	</div>
	<div class="pop-body">
		<div class="pop-hd">
			<span class="pop-hd-1">lorem ipsum </span>		
			<span class="pop-hd-2">dolor sit popup</span>		
		</div>
		<div class="pop-body-tt">
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>		
		</div>	
	</div>
</div>
</div>
<div class="pop-tt-wr"  id="pop_2">
<div class="pop-tt-inn">
	<div class="pop-close"  onClick={() => popClose('pop_2')}>
<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="22.8219" y1="0.347903" x2="1.24961" y2="22.6155" stroke="black"/>
<line y1="-0.5" x2="31.0034" y2="-0.5" transform="matrix(0.695805 0.71823 0.71823 -0.695805 0.890503 0)" stroke="black"/>
</svg>	
	</div>
	<div class="pop-body">
		<div class="pop-hd">
			<span class="pop-hd-2">dolor sit popup</span>		
		</div>
		<div class="pop-body-tt">
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
		</div>	
	</div>
</div>
</div>
<div class="pop-tt-wr"  id="pop_3">
<div class="pop-tt-inn">
	<div class="pop-close"  onClick={() => popClose('pop_3')}>
<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="22.8219" y1="0.347903" x2="1.24961" y2="22.6155" stroke="black"/>
<line y1="-0.5" x2="31.0034" y2="-0.5" transform="matrix(0.695805 0.71823 0.71823 -0.695805 0.890503 0)" stroke="black"/>
</svg>	
	</div>
	<div class="pop-body">
		<div class="pop-hd">
			<span class="pop-hd-1">lorem ipsum </span>		
			<span class="pop-hd-2">dolor sit popup</span>	
			<span class="pop-hd-1">lorem ipsum </span>	
		</div>
		<div class="pop-body-tt">
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
			<p>
				Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
			</p>		
		</div>	
	</div>
</div>
</div>
</div>
  );
};

export default Footer;
