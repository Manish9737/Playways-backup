const GameStation = require("../../model/gsSchema");
const Host = require("../../model/hostSchema");
const Game = require("../../model/gameSchema");
const Booking = require("../../model/bookingSchema");
const User = require("../../model/userSchema");
const multer = require("multer");

const addGameStation = async (req, res, next) => {
  try {
    let imgPath = null;

    if (req.file) {
      const gsLogoFilename = req.file.filename;
      imgPath = `/images/${gsLogoFilename}`;
      console.log(gsLogoFilename);
    }
    
    const {
      host,
      name,
      email,
      phone,
      city,
      state,
      country,
      latitude,
      longitude,
      address,
    } = req.body;

    if (
      !host ||
      !name ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !country ||
      !latitude ||
      !longitude ||
      !address
    ) {
      return res
        .status(422)
        .json({ error: "Please fill the fields properly.", success: false });
    }

    const GameStations = new GameStation({
      host,
      name,
      email,
      phone,
      gsLogo: imgPath,
      city,
      state,
      country,
      latitude,
      longitude,
      address,
    });

    // console.log(GameStations);
    await GameStations.save();
    console.log("Game Station is added.");
    return res.status(200).json({
      message: "Game Station added successfully.",
      success: true,
      GameStations,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Internal server error.", success: false });
  }
};

const getGameStation = async (req, res, next) => {
  const { emailOrPhone } = req.body;

  try {
    let gameStations;

    const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone);
    if (isEmail) {
      gameStations = await GameStation.find({ email: emailOrPhone }).populate(
        "host",
        "-password -cpassword"
      );
    } else {
      gameStations = await GameStation.find({ phone: emailOrPhone }).populate(
        "host",
        "-password -cpassword"
      );
    }

    if (!gameStations || gameStations.length === 0) {
      return res
        .status(404)
        .json({ message: "Game Stations not found", success: false });
    }

    const gameStationsWithImages = gameStations.map((station) => {
      return {
        _id: station._id,
        host: station.host,
        name: station.name,
        email: station.email,
        phone: station.phone,
        gsLogo: station.gsLogo,
        city: station.city,
        state: station.state,
        country: station.country,
        latitude: station.latitude,
        longitude: station.longitude,
        address: station.address,
        status: station.status,
      };
    });

    return res.status(200).json({
      message: "Game Stations found",
      success: true,
      gameStations: gameStationsWithImages,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

const allStations = async (req, res, next) => {
  try {
    const gameStations = await GameStation.find({});

    res.status(200).json({ gameStations });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

const updateGameStation = async (req, res, next) => {
  const gameStationId = req.params.id;
  const updateData = req.body;

  try {
    const gameStation = await GameStation.findById(gameStationId).catch(
      (error) => {
        console.error("Error in findById:", error);
        throw error;
      }
    );

    if (!gameStation) {
      return res
        .status(404)
        .json({ message: "GameStation not found", success: false });
    }

    if (req.file) {
      const imgFileName = req.file.filename;
      const imgPath = `/images/${imgFileName}`;
      gameStation.gsLogo = imgPath;
    }

    Object.assign(gameStation, updateData);

    await gameStation.save().catch((error) => {
      console.error("Error in saving game station:", error);
      throw error;
    });

    return res.status(200).json({
      message: "GameStation data updated successfully",
      success: true,
      gameStation,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

const getAllGsByHostId = async (req, res, next) => {
  const hostId = req.params.id;
  try {
    const host = await Host.findById(hostId);

    if (!host) {
      return res.status(404).json({ error: "Host not found.", success: false });
    }

    const gameStations = await GameStation.find({ host: hostId }).select(
      "-host"
    );

    const gameStationsWithImages = gameStations.map((station) => {
      return {
        _id: station._id,
        name: station.name,
        email: station.email,
        phone: station.phone,
        gsLogo: station.gsLogo,
        city: station.city,
        state: station.state,
        country: station.country,
        latitude: station.latitude,
        longitude: station.longitude,
        address: station.address,
        status: station.status,
      };
    });

    return res
      .status(200)
      .json({ gameStations: gameStationsWithImages, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Internal server error.", success: false });
  }
};

const deleteGameStation = async (req, res, next) => {
  const gameStationId = req.params.id;

  try {
    const deletedGameStation = await GameStation.findByIdAndDelete(
      gameStationId
    );

    if (!deletedGameStation) {
      return res
        .status(404)
        .json({ message: "GameStation not found", success: false });
    }

    return res
      .status(200)
      .json({ message: "GameStation deleted successfully", success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

const addPhotoToGameStation = async (req, res, next) => {
  try {
    const gameStationId = req.params.id;
    const photo = req.file ? req.file.filename : "";
    const photoPath = `/images/${photo}`;

    if (!photo) {
      return res.status(400).json({
        error: "Please upload a photo",
        success: false,
      });
    }

    // Update the game station with the new photo
    const updatedGameStation = await GameStation.findByIdAndUpdate(
      gameStationId,
      { $push: { images: photoPath } },
      { new: true }
    );

    return res.status(200).json({
      message: "Photo uploaded successfully",
      success: true,
      GameStation: updatedGameStation.name,
      images: updatedGameStation.images,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const getGameStationImages = async (req, res, next) => {
  try {
    const gameStationId = req.params.id;

    // Find the game station by ID
    const gameStation = await GameStation.findById(gameStationId);

    if (!gameStation) {
      return res.status(404).json({
        message: "Game station not found",
        success: false,
      });
    }

    // Return the images associated with the game station
    return res.status(200).json({
      images: gameStation.images, // Assuming 'images' is an array field in the GameStation model containing image paths
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const addVideoToGameStation = async (req, res) => {
  try {
    const gameStationId = req.params.id;
    const videoFile = req.file;

    if (!videoFile) {
      return res.status(400).json({
        error: "Please upload a video file",
        success: false,
      });
    }

    const videoPath = `/videos/${videoFile.filename}`;

    const updatedGameStation = await GameStation.findByIdAndUpdate(
      gameStationId,
      { $push: { videos: videoPath } },
      { new: true }
    );

    return res.status(200).json({
      message: "Video uploaded successfully",
      success: true,
      gameStation: updatedGameStation.name,
      videos: updatedGameStation.videos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const getGameStationVideos = async (req, res, next) => {
  try {
    const gameStationId = req.params.id;

    // Find the game station by ID
    const gameStation = await GameStation.findById(gameStationId);

    if (!gameStation) {
      return res.status(404).json({
        message: "Game station not found",
        success: false,
      });
    }

    // Return the images associated with the game station
    return res.status(200).json({
      images: gameStation.videos,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const getCountOfStationsById = async (req, res, next) => {
  const hostId = req.params.hostId;

  try {
    const stations = await GameStation.find({ host: hostId });

    let allowedCount = 0;
    let pendingCount = 0;
    let rejectedCount = 0;

    stations.forEach((station) => {
      if (station.status === "Allowed") {
        allowedCount++;
      } else if (station.status === "Pending") {
        pendingCount++;
      } else if (station.status === "Rejected") {
        rejectedCount++;
      }
    });

    const totalCount = stations.length;

    res.json({
      allowed: allowedCount,
      pending: pendingCount,
      rejected: rejectedCount,
      total: totalCount,
      stations,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getGsById = async (req, res, next) => {
  try {
    const gameStationId = req.params.id;
    const gameStation = await GameStation.findById(gameStationId);

    if (!gameStation) {
      return res.status(404).json({ message: "GameStation not found" });
    }

    res.status(200).json({ gameStation });
  } catch (error) {
    // Handle errors
    console.error("Error fetching GameStation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addGameToGs = async (req, res, next) => {
  try {
    const { gameId, description, slotPrice, time } = req.body;
    const { gameStationId } = req.params;

    const gameStation = await GameStation.findById(gameStationId);
    if (!gameStation) {
      return res.status(404).json({ message: "Game station not found" });
    }

    const existingGame = gameStation.games.find(
      (game) => game.game.toString() === gameId
    );
    if (existingGame) {
      return res
        .status(400)
        .json({ message: "Game already exists in the game station" });
    }

    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    gameStation.games.push({
      game: gameId,
      description,
      slotPrice,
      time
    });

    await gameStation.save();

    res.status(201).json({
      message: "Game template added to game station successfully",
      gameStation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getGamesOfGs = async (req, res, next) => {
  const { stationId } = req.params;

  try {
    const gameStation = await GameStation.findById(stationId).populate(
      "games.game"
    );

    if (!gameStation) {
      return res.status(404).json({ message: "GameStation not found" });
    }

    const games = gameStation.games.map((game) => ({
      id: game.game.id,
      image: game.game.image,
      name: game.game.name,
      timing: game.time,
      description: game.description,
      slotPrice: game.slotPrice,
    }));

    res.status(200).json({ games });
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllBookingsByGsId = async (req, res, next) => {
  const gameStationId = req.params.id;

  try {
    const bookings = await await Booking.find({ gameStation: gameStationId })
      .populate("userId", "-password")
      .populate("gameStationId");

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({
        message: "No bookings found for the provided game station ID",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Bookings found",
      success: true,
      bookings: bookings,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const updateOpeningClosingTime = async (req, res, next) => {
  const { id } = req.params;
  const { openingTime, closingTime, closedDays } = req.body;

  try {
    const gameStation = await GameStation.findById(id);

    if (!gameStation) {
      return res.status(404).json({ message: 'GameStation not found', success: false });
    }

    gameStation.openingTime = openingTime;
    gameStation.closingTime = closingTime;
    gameStation.closedDays = closedDays;

    await gameStation.save();

    return res.status(200).json({ message: 'Opening and closing times updated successfully', success: true, gameStation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', success: false });
  }
};

// const generateGameSlots = async (req, res, next) => {
//   try {
//     const { gameStationId } = req.params;
//     const slots = [];

//     // Fetch game station details
//     const gameStation = await GameStation.findById(gameStationId);
//     if (!gameStation) {
//       return res.status(404).json({ message: "GameStation not found", success: false });
//     }

//     const gameIds = gameStation.games.map(game => game.game); // Extract game IDs
//     const games = await Game.find({ _id: { $in: gameIds } });
//     if (!games || games.length === 0) {
//       return res.status(404).json({ message: "No games found for the provided game station", success: false });
//     }

//     // Iterate over each game
//     for (const game of games) {
//       const gameDuration = game.time;
//       const slotInterval = 30; // Assuming slots are generated in 30-minute intervals
      
//       // Iterate over each hour within the opening hours of the game station
//       for (let hour = gameStation.openingTime; hour < gameStation.closingTime; hour++) {
//         // Iterate over each minute within the hour
//         for (let minute = 0; minute < 60; minute += slotInterval) {
//           const slotStartTime = `${hour}:${minute < 10 ? '0' + minute : minute}`;
//           const slotEndTime = calculateEndTime(hour, minute, gameDuration);

//           // Check if the maximum number of matches for this slot is already booked
//           const existingBookings = await Booking.find({
//             gameStation: gameStationId,
//             startTime: slotStartTime,
//             endTime: slotEndTime
//           });

//           const maxMatchesAllowed = game.matches || 1;
//           const bookedMatches = existingBookings.reduce((total, booking) => total + booking.matches, 0);
//           const availableMatches = maxMatchesAllowed - bookedMatches;

//           // Only add slots if there are available matches
//           if (availableMatches > 0) {
//             // Create a new slot object and add it to the array
//             slots.push({
//               game: game.description,
//               startTime: slotStartTime,
//               endTime: slotEndTime,
//               availableMatches: availableMatches // Optional: include the available matches in the slot object
//             });
//           }
//         }
//       }
//     }

//     res.status(200).json({ slots, success: true });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error", success: false });
//   }
// };


// // Helper function to calculate end time of the slot
// function calculateEndTime(startHour, startMinute, duration) {
//   let endHour = startHour + Math.floor((startMinute + duration) / 60);
//   let endMinute = (startMinute + duration) % 60;

//   if (endHour > 23) {
//     endHour -= 24;
//   }

//   return `${endHour}:${endMinute < 10 ? '0' + endMinute : endMinute}`;
// }

module.exports = {
  addGameStation,
  getGameStation,
  allStations,
  addPhotoToGameStation,
  addVideoToGameStation,
  getGameStationImages,
  getGameStationVideos,
  updateGameStation,
  deleteGameStation,
  getAllGsByHostId,
  getCountOfStationsById,
  getGsById,
  addGameToGs,
  getGamesOfGs,
  getAllBookingsByGsId,
  updateOpeningClosingTime,
  // generateGameSlots,
};
