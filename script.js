document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Car details functionality
    const carList = document.querySelector('.car-list');
    const carDetails = document.getElementById('car-details');
    const carSpecsContainer = document.getElementById('car-specs-container');
    const backToCarsBtn = document.getElementById('back-to-cars');

    const carData = {
        1: {
            name: "Toyota Quantum 2016",
            price: "R220,000",
            engine: "2494 cc",
            mileage: "250,363 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "Mini Bus",
            color: "White"
        },
        2: {
            name: "Ford Ranger Wildtrak 2016",
            price: "R190,000",
            engine: "3200 cc",
            mileage: "52,432 km",
            transmission: "Manual",
            fuel: "Diesel",
            bodyType: "Double Cab Pickup",
            color: "Orange"
        }, 
        3: {
            name: "VW Polo TSI 2017",
            price: "R85 000",
            engine: "1200 cc",
            mileage: "94,432 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "Red"
        },
        4: {
            name: "VW Polo TSI 2019",
            price: "R115 000",
            engine: "1200 cc",
            mileage: "20 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "White"
        },
        5: {
            name: "Ford Ranger Wildtrack 2018",
            price: "R200,000",
            engine: "3200 cc",
            mileage: "21 000 km",
            transmission: "Manual",
            fuel: "Diesel",
            bodyType: "Double Cab Pickup",
            color: "white"
        }, 
        6:{
            name: "Suzuki swift 2023",
            price: "R70 000",
            engine: "1.2 L",
            mileage: "53 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        }, 
        7:{
            name: "Toyota Avanza 2018",
            price: "R90 000",
            engine: "1.3 L",
            mileage: "60 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "Gray" 
        },
        8:{
            name: "Toyota Rumion 2023",
            price: "R150 000",
            engine: "1.5 L",
            mileage: "47 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        }, 
        9:{

            name: "Polo vivo 2021",
            price: "R90 000",
            engine: "1.4 L",
            mileage: "80 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        },
        10: {
            name: "Hyundia i30 2019",
            price: "R88 000",
            engine: "1.6 L",
            mileage: "53 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        },
        11: {
            name: "Hyundia i30",
            price: "R62 000",
            engine: "1.6 L",
            mileage: "53 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        },
        12: {
            name: "Suzuki Vitara 2022",
            price: "R96 000",
            engine: "1.6 L",
            mileage: "75 000 km",
            transmission: "Manual ",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        },
        13: {
            name: "Toyota Hilux SR5 2018",
            price: "R210 000",
            engine: "2.8 L",
            mileage: "53 000 km",
            transmission: "Automatic",
            fuel: "Diesel",
            bodyType: "double cab ",
            color: "white" 
        },
        14: {
            name: "Toyota corolla 2015",
            price: "R60 000",
            engine: "1.6 L",
            mileage: "69 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " ", 
            color: "white" 
        },
        15: {
            name: "Mercedes Benz c200 2019",
            price: "R230 000",
            engine: "C200 AMG",
            mileage: "72 000 km",
            transmission: "Automatic",
            fuel: "Petrol",
            bodyType: " ",
            color: "white" 
        }

        
        // Add data for the other 5 cars
    };

    carList.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-specs-btn')) {
            const carItem = e.target.closest('.car-item');
            const carId = carItem.dataset.carId;
            showCarDetails(carId);
        }
    });

    function showCarDetails(carId) {
        const car = carData[carId];
        carSpecsContainer.innerHTML = `
            <h3>${car.name}</h3>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Engine:</strong> ${car.engine}</p>
            <p><strong>Mileage:</strong> ${car.mileage}</p>
            <p><strong>Transmission:</strong> ${car.transmission}</p>
            <p><strong>Fuel:</strong> ${car.fuel}</p>
            <p><strong>Body Type:</strong> ${car.bodyType}</p>
            <p><strong>Color:</strong> ${car.color}</p>
        `;
        carList.classList.add('hidden');
        carDetails.classList.remove('hidden');
    }

    backToCarsBtn.addEventListener('click', function() {
        carList.classList.remove('hidden');
        carDetails.classList.add('hidden');
    });
});
