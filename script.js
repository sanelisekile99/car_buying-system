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
            name: "Toyota Hilux 2014",
            price: "R125,000",
            engine: "3.0",
            mileage: "122000 km",
            transmission: "Manual",
            fuel: "Desiel",
            bodyType: "double cab",
            color: "White"
        },
        2: {
            name: "Toyota Avanza",
            price: "R78,000",
            engine: "1.5",
            mileage: "99000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "Hatchback",
            color: "White"
        }, 
        3: {
            name: "vw polo TSI 2018",
            price: "R80 000",
            engine: "1.2 L",
            mileage: "88000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "hatchback ",
            color: "white"
        },
        4: {
            name: "Toyota Quantum 2018 ",
            price: "R165 000",
            engine: "2.5 L ",
            mileage: "112 000 km",
            transmission: "Manual",
            fuel: "Desiel ",
            bodyType: " Mini bus",
            color: "White"
        },
        5: {
            name: "Toyota Etios 2018",
            price: "R5 000",
            engine: "1.5",
            mileage: "95 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "sedan",
            color: "white"
        }, 
        6:{
            name: "vw polo GTI 2019",
            price: "R 160 000",
            engine: "2.0 L",
            mileage: "110 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " hatchback",
            color: "white" 
        }, 
        7:{
            name: "vw polo sedan 2019",
            price: "R85 000",
            engine: "1.4 L",
            mileage: "97 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: " sedan",
            color: "white" 
        },
        8:{
            name: "Toyota Hilux 2019",
            price: "R185 000",
            engine: "2.8 L",
            mileage: "55 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "double cab ",
            color: "white" 
        }, 
        9:{

            name: "Toyota Quantum sesfikile",
            price: "R185 000",
            engine: "2.5 L",
            mileage: "86 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "Mini bus ",
            color: "white" 
        },
        10: {
            name: "vw polo 8 TSI 2020",
            price: "R130 000",
            engine: "1.0 L",
            mileage: "95 000 km",
            transmission: "Automatic",
            fuel: "Petrol",
            bodyType: "hatchback ",
            color: "white" 
        },
        11: {
            name: " vw polo vivo 2020",
            price: "R85 000",
            engine: "1.2 L",
            mileage: "111 000 km",
            transmission: "Manual",
            fuel: "petrol",
            bodyType: "hatchback ",
            color: "silver" 
        },
        12: {
            name: "Toyota Fortuner 2021",
            price: "R200 000",
            engine: "2.4 L",
            mileage: "71 000 km",
            transmission: "Automatic ",
            fuel: "Desiel ",
            bodyType: "SUV ",
            color: "white" 
        },
        13: {
            name: "Renualt Triber 2021",
            price: "R75 000",
            engine: "1.0 L",
            mileage: "75 000 km",
            transmission: "Manual ",
            fuel: "Petrol",
            bodyType: "SUV",
            color: "silver" 
        },
        14: {
            name: "Toyota single cab 2021",
            price: "R130 000",
            engine: "2.0 L",
            mileage: "67 000 km",
            transmission: "Manual",
            fuel: "Petrol",
            bodyType: "single cab ", 
            color: "white" 
        },
        15: {
            name: "Suzuki Eetiga 2021",
            price: "R135 000",
            engine: "1.5 L",
            mileage: "67 000 km",
            transmission: "Automatic",
            fuel: "Petrol",
            bodyType: " SUV",
            color: "Silver" 
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