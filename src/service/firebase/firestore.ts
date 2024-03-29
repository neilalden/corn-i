import { async } from "@firebase/util";
import {
	collection,
	addDoc,
	getDocs,
	doc,
	getDoc,
	query,
	orderBy,
	limit,
	Query,
	where,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { whereQueryType } from "../../utils/types";
import { firestore } from "./config";

export const createData = async (
	collectionName: string,
	data: object,
	documentId?: string,
) => {
	try {
		const collectionFunc = documentId
			? collection(firestore, collectionName, documentId)
			: collection(firestore, collectionName);

		const documentRef = await addDoc(collectionFunc, data);
		return documentRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const updateDocument = async (collectionName: string, docId: string, data: any) => {
	try {
		const result = await updateDoc(doc(firestore, collectionName, docId), data);
		return result
	} catch (error) {
		console.error(error)
	}
}

export const readCollection = async (
	collectionName: string,
	queryParams?: Query,
) => {
	try {
		const queryValue = queryParams
			? queryParams
			: collection(firestore, collectionName);
		const querySnapshot = await getDocs(queryValue);
		const values: any = [];
		querySnapshot.forEach((document) => {
			const data: any = {
				...document.data(),
				documentId: document.id,
				// date: document.data()?.toDate(),
			};
			if (data?.date !== undefined) data.date = document.data().date.toDate()
			if (data?.isPrediction !== undefined) data.isPrediction = document.data().isPrediction
			values.push(data);
		});
		return values;
	} catch (e) {
		console.error("Error fetching collection: ", e);
	}
};

export const readCollectionQuery = (
	collectionRef: Query<unknown>,
	whereParams?: whereQueryType,
	orderByParams?: string,
	limitParams?: number,
) => {
	let q;
	if (whereParams && orderByParams && limitParams) {
		q = query(collectionRef, where(whereParams.arg1, whereParams.arg2, whereParams.arg3), orderBy(orderByParams), limit(limitParams));
	}
	else if (orderByParams && limitParams) {
		q = query(collectionRef, orderBy(orderByParams), limit(limitParams));
	}
	else if (whereParams) {
		q = query(
			collectionRef,
			where(whereParams.arg1, whereParams.arg2, whereParams.arg3),
		);
	} else if (orderByParams) {
		q = query(collectionRef, orderBy(orderByParams));
	} else if (limitParams) {
		q = query(collectionRef, limit(limitParams));
	}
	return q;
};

export const readDocument = async (collectionName: string, docId: string) => {
	try {
		const documentRef = doc(firestore, collectionName, docId);
		const document = await getDoc(documentRef);
		if (document.exists()) {
			return {
				...document.data(),
				documentId: document.id,
				date: document.data().date.toDate(),
			};
		} else {
			console.warn("No such document!");
		}
	} catch (e) {
		console.error("Error fetching document: ", e);
	}
};

export const deleteMultiple = async (collectionName: string, map: string, whereParams: whereQueryType,) => {
	const q = query(collection(firestore, collectionName), where("map", "==", map), where(whereParams.arg1, whereParams.arg2, whereParams.arg3))
	const querySnapshot = await getDocs(q);
	return querySnapshot.forEach(async (document) => {
		const del = await deleteDoc(doc(firestore, collectionName, document.id))
		return del
	})
}

export const deletePrediction = async (collectionName: string, map: string, setUploadingPredMax: React.Dispatch<React.SetStateAction<number>>, setUploadPredProgress: React.Dispatch<React.SetStateAction<number>>) => {

	const q = query(collection(firestore, collectionName), where("map", "==", map), where("isPrediction", "==", true))
	const querySnapshot = await getDocs(q);
	setUploadingPredMax(prev => prev += querySnapshot.size)
	return querySnapshot.forEach(async (document) => {
		const del = await deleteDoc(doc(firestore, collectionName, document.id))
		setUploadPredProgress(prev => prev += 1);
		return del;
	})
}

export const getOldestDocument = (collectionName: string, map: string) => {
	try {
		const q = query(collection(firestore, collectionName), where("map", "==", map), orderBy("date"), limit(1))
		return getDocs(q).then((snapshot) => {
			let data: any = undefined
			snapshot.forEach((document) => {
				if (data === undefined && Object.keys(document.data()).length !== 0) data = document.data();
			})
			return data
		})
	} catch (error) {
		console.error(error)
	}
};
export const getOldestPredictionDocument = (collectionName: string, map: string) => {
	try {
		const q = query(collection(firestore, collectionName), where("map", "==", map), where("isPrediction", "==", true), orderBy("date"), limit(1))
		return getDocs(q).then((snapshot) => {
			let data = {}
			snapshot.forEach((document) => {
				data = (document.data())
			})
			return data
		})
	} catch (error) {
		console.error(error)
	}
};