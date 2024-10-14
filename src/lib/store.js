import { devtools } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  devtools((set) => ({
    formStep: 1,
    date: "",
    pickup: null,
    stop: null,
    time: "",
    destination: null,
    vehicleType: "",
    vehicleDetails: {},
    note: "",
    driverNote: "",
    occasion: "",
    passengers: 0,
    contact: { name: "", phone: "", email: "" },
    distanceStartToEnd: 0,
    distanceStartToStop: 0,
    distanceStopToEnd: 0,
    additionalOptions: [],
    totalPrice: 0,
    hourlyBookingCount: 0,
    additionalVehicleCount: 0,
    additionalVehicleExtraAmount: 0, // Track the extra amount added for additional vehicles
    luggageTrailerExtraAmount: 0, // Track the extra amount added for luggage trailers
    splitPaymentDetails: { passengers: 0 },
    orderNumber: "",
    splitPayment: false,
    options: [
      { name: "Hourly Bookings", price: "$0" },
      { name: "Add More Vehicles", price: "$0" },
      { name: "Luggage Trailer", price: "$0" }, // Base price for reference
    ],
    vehicles: {
      smallVan: {
        name: "Bus",
        image: "/vehicles/Vito1.png",
        passengerLimit: "8 Seater",
        averageCostPerPerson: "$15",
        minimumPassengers: 4,
        cardDetails: "Mercedes-Benz V-Class or Similar",
        baseFare: 40,
        hourlyRate: 60,
      },
      largeVan: {
        name: "Mini Bus",
        image: "/vehicles/2.png",
        passengerLimit: "10 Seater",
        averageCostPerPerson: "$20",
        minimumPassengers: 2,
        cardDetails: "Toyota Hi- Ace or Similar",
        baseFare: 50,
        hourlyRate: 100,
      },
      bus: {
        name: "Bus",
        image: "/vehicles/coaster.png",
        passengerLimit: "30 Seater",
        averageCostPerPerson: "$10",
        minimumPassengers: 3,
        cardDetails: "Toyota Coaster or Similar",
        baseFare: 150,
        hourlyRate: 150,
      },
    },
    setFormStep: (step) => set({ formStep: step }),
    setDate: (date) => set((state) => ({ ...state, date })),
    setTime: (time) => set((state) => ({ ...state, time })),
    setPickup: (pickup) => set((state) => ({ ...state, pickup })),
    setStop: (stop) => set((state) => ({ ...state, stop })),
    setDestination: (destination) =>
      set((state) => ({ ...state, destination })),
    setVehicleType: (vehicleType) =>
      set((state) => ({ ...state, vehicleType })),
    setVehicleDetails: (vehicleDetails) =>
      set((state) => ({ ...state, vehicleDetails })),
    setOccasion: (occasion) => set((state) => ({ ...state, occasion })),
    setPassengers: (passengers) => set((state) => ({ ...state, passengers })),
    setContact: (contact) => set((state) => ({ ...state, contact })),
    setNote: (note) => set((state) => ({ ...state, note })),
    setDriverNote: (driverNote) => set((state) => ({ ...state, driverNote })),
    setDistanceStartToEnd: (distanceStartToEnd) =>
      set((state) => ({ ...state, distanceStartToEnd })),
    setDistanceStartToStop: (distanceStartToStop) =>
      set((state) => ({ ...state, distanceStartToStop })),
    setDistanceStopToEnd: (distanceStopToEnd) =>
      set((state) => ({ ...state, distanceStopToEnd })),
    setAdditionalOptions: (additionalOptions) =>
      set((state) => ({ ...state, additionalOptions })),
    setHourlyBookingCount: (hourlyBookingCount) =>
      set((state) => ({ ...state, hourlyBookingCount })),
    setAdditionalVehicleCount: (additionalVehicleCount) =>
      set((state) => ({ ...state, additionalVehicleCount })),
    setSplitPaymentDetails: (splitPaymentDetails) =>
      set((state) => ({ ...state, splitPaymentDetails })),
    setOrderNumber: (orderNumber) =>
      set((state) => ({ ...state, orderNumber })),
    setSplitPayment: (value) => set({ splitPayment: value }),

    calculateTotalPrice: () =>
      set((state) => {
        const distance =
          state.distanceStartToEnd +
          state.distanceStartToStop +
          state.distanceStopToEnd;

        // Determine base fare and per-km rate based on vehicle type
        let baseFare = 0;
        let perKmFare = 0;

        if (state.vehicleType === "smallVan") {
          baseFare = 40; // Van base fare for 5km
          perKmFare = 4.5; // Van per km fare
        } else if (state.vehicleType === "largeVan") {
          baseFare = 60; // Mini Bus base fare for 5km
          perKmFare = 6.5; // Mini Bus per km fare
        } else if (state.vehicleType === "bus") {
          baseFare = 90; // Bus base fare for 5km
          perKmFare = 9.5; // Bus per km fare
        }

        // Calculate additional fare for distance beyond the base 5km
        const distanceFare = distance > 5 ? (distance - 5) * perKmFare : 0;

        // Calculate the total vehicle cost (base fare + distance fare) for 1 vehicle
        let totalVehiclePrice = baseFare + distanceFare;

        let additionalVehicleExtraAmount = 0;
        let luggageTrailerExtraAmount = 0;

        // Calculate the additional options cost (excluding vehicles and luggage trailer, which are handled separately)
        const additionalOptionsCost = state.additionalOptions.reduce(
          (acc, option) => {
            const optionDetails = state.options.find(
              (opt) => opt.name === option
            );
            const optionPrice = optionDetails?.price.replace("$", "") || 0;

            if (option === "Hourly Bookings") {
              return (
                acc + state.vehicleDetails.hourlyRate * state.hourlyBookingCount
              );
            } else if (
              option === "Add More Vehicles" ||
              option === "Luggage Trailer"
            ) {
              // Price already handled separately
              return acc;
            } else {
              return acc + parseFloat(optionPrice);
            }
          },
          0
        );

        // Add luggage trailer cost if selected
        if (state.additionalOptions.includes("Luggage Trailer")) {
          if (
            state.vehicleType === "smallVan" ||
            state.vehicleType === "largeVan"
          ) {
            luggageTrailerExtraAmount = 20;
          } else if (state.vehicleType === "bus") {
            luggageTrailerExtraAmount = 30;
          }
        }

        // Calculate the total price for one vehicle, including additional options
        let totalPrice =
          totalVehiclePrice + additionalOptionsCost + luggageTrailerExtraAmount;

        // If additional vehicles are selected, multiply the entire total price by the vehicle count (including the original one)
        if (state.additionalOptions.includes("Add More Vehicles")) {
          totalPrice *= state.additionalVehicleCount + 1; // Including the original vehicle
        }

        return {
          ...state,
          totalPrice,
          distanceFare, // Store distanceFare in the state
          additionalVehicleExtraAmount, // Store extra amount added by additional vehicles
          luggageTrailerExtraAmount, // Store extra amount added by luggage trailer
        };
      }),

    // calculateTotalPrice: () =>
    //   set((state) => {
    //     const distance =
    //       state.distanceStartToEnd +
    //       state.distanceStartToStop +
    //       state.distanceStopToEnd;

    //     // Determine base fare and per-km rate based on vehicle type
    //     let baseFare = 0;
    //     let perKmFare = 0;

    //     if (state.vehicleType === "smallVan") {
    //       baseFare = 40; // Van base fare for 5km
    //       perKmFare = 4.5; // Van per km fare
    //     } else if (state.vehicleType === "largeVan") {
    //       baseFare = 60; // Mini Bus base fare for 5km
    //       perKmFare = 6.5; // Mini Bus per km fare
    //     } else if (state.vehicleType === "bus") {
    //       baseFare = 90; // Bus base fare for 5km
    //       perKmFare = 9.5; // Bus per km fare
    //     }

    //     // Calculate additional fare for distance beyond the base 5km
    //     const distanceFare = distance > 5 ? (distance - 5) * perKmFare : 0;

    //     // Calculate the total vehicle cost (base fare + distance fare) for 1 vehicle
    //     let totalVehiclePrice = baseFare + distanceFare;

    //     let additionalVehicleExtraAmount = 0;
    //     let luggageTrailerExtraAmount = 0;

    //     // Calculate the additional options cost (excluding vehicles and luggage trailer, which are handled separately)
    //     const additionalOptionsCost = state.additionalOptions.reduce(
    //       (acc, option) => {
    //         const optionDetails = state.options.find(
    //           (opt) => opt.name === option
    //         );
    //         const optionPrice = optionDetails?.price.replace("$", "") || 0;

    //         if (option === "Hourly Bookings") {
    //           return (
    //             acc + state.vehicleDetails.hourlyRate * state.hourlyBookingCount
    //           );
    //         } else if (
    //           option === "Add More Vehicles" ||
    //           option === "Luggage Trailer"
    //         ) {
    //           // Price already handled separately
    //           return acc;
    //         } else {
    //           return acc + parseFloat(optionPrice);
    //         }
    //       },
    //       0
    //     );

    //     // Add luggage trailer cost if selected
    //     if (state.additionalOptions.includes("Luggage Trailer")) {
    //       if (
    //         state.vehicleType === "smallVan" ||
    //         state.vehicleType === "largeVan"
    //       ) {
    //         luggageTrailerExtraAmount = 20;
    //       } else if (state.vehicleType === "bus") {
    //         luggageTrailerExtraAmount = 30;
    //       }
    //     }

    //     // Calculate the total price for one vehicle, including additional options
    //     let totalPrice =
    //       totalVehiclePrice + additionalOptionsCost + luggageTrailerExtraAmount;

    //     // If additional vehicles are selected, multiply the entire total price by the vehicle count (including the original one)
    //     if (state.additionalOptions.includes("Add More Vehicles")) {
    //       totalPrice *= state.additionalVehicleCount + 1; // Including the original vehicle
    //     }

    //     return {
    //       ...state,
    //       totalPrice,
    //       additionalVehicleExtraAmount, // Store extra amount added by additional vehicles
    //       luggageTrailerExtraAmount, // Store extra amount added by luggage trailer
    //     };
    //   }),

    setDistances: (distances) => set((state) => ({ ...state, ...distances })),
  }))
);

export default useStore;
