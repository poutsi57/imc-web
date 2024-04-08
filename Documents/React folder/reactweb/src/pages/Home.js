import Card from '../components/Card';
import Footer from '../components/Footer';
import React from 'react';
import "../components/Card.css"
import "../components/Footer.css"
export default function Home(props) {
    return (
        <div id='page'>
            <div className='container-header'>
                <h1>The Team</h1>
            </div>
            <div className='container-group1'>
                <ul>
                    <Card name="Hamza Khlaf" role="Chair" img="/chair.png" />
                    <Card name="Islem Gafsi" role="President" img="/p.jpg" />
                    <Card name="Saber Arfaoui" role="Project Manager" img="/p1.jpg" />
                    <Card role="Community Manager" name="Mouadh Mkaissi" img="p2.jpg" />
                    <Card role="Entrepreneurship Managers" name="Nessma Karnit & Amen Khlifi" img="p3.jpg" />
                    <Card role="Production Manager" name="Yassine Jeridi" img="p4.jpg" />
                    <Card role="Logistics Manager" name="Nour Bourass" img="p5.jpg" />
                    <Card role="Design Manager" name="Yassine Belaid" img="p6.jpg" />
                    <Card role="Buisness Manager" name="Ikbel Bouzouita" img="p7.jpg" />
                </ul>
            </div>
            <div className='container-footer'>
                <Footer />
            </div>
        </div>
    );
}